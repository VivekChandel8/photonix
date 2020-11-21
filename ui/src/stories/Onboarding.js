import React from 'react'
import { StateMachineProvider, createStore } from 'little-state-machine'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import '../static/css/Onboarding.css'
import Step1AdminUser from '../components/onboarding/Step1AdminUser'
import Step2AdminCreated from '../components/onboarding/Step2AdminCreated'
import Step3CreateLibrary from '../components/onboarding/Step3CreateLibrary'
import Step4PhotoImporting from '../components/onboarding/Step4PhotoImporting'
import Step5Search from '../components/onboarding/Step5Search'
import Result from '../components/onboarding/Result'

createStore({
  data: {},
})

export default function Onboarding() {
  return (
    <StateMachineProvider>
      <div className="Onboarding">
        <div class="stripesHr">
          <div style={{ background: '#005461' }}></div>
          <div style={{ background: '#00A8A1' }}></div>
          <div style={{ background: '#F5A51E' }}></div>
          <div style={{ background: '#F5791E' }}></div>
          <div style={{ background: '#F54820' }}></div>
        </div>
        <Router>
          <Route exact path="/onboarding" component={Step1AdminUser} />
          <Route path="/onboarding/step2" component={Step2AdminCreated} />
          <Route path="/onboarding/step3" component={Step3CreateLibrary} />
          <Route path="/onboarding/step4" component={Step4PhotoImporting} />
          <Route path="/onboarding/step5" component={Step5Search} />
          <Route path="/onboarding/result" component={Result} />
        </Router>
      </div>
    </StateMachineProvider>
  )
}
