from django.core.management.base import BaseCommand

from photos.utils.organise import import_photos_from_dir
from photos.utils.system import missing_system_dependencies
from web.utils import notify


class Command(BaseCommand):
    help = 'Copies all photos from one directory into structured data folder hierchy and creates relevant database records'

    def add_arguments(self, parser):
        parser.add_argument('paths', nargs='+')

    def import_photos(self, paths):
        missing = missing_system_dependencies(['exiftool', ])
        if missing:
            print('Missing dependencies: {}'.format(missing))
            exit(1)

        for path in paths:
            import_photos_from_dir(path)

    def handle(self, *args, **options):
        notify('photo_dirs_scanning', True)
        self.import_photos(options['paths'])
        notify('photo_dirs_scanning', False)
