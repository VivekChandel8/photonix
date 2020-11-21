import React from 'react'
import { useStateMachine } from 'little-state-machine'
import { Flex, Button } from '@chakra-ui/core'

import updateAction from '../components/onboarding/updateAction'

const ModalForm = ({
  children,
  formState,
  history,
  handleSubmit,
  previousStep,
  nextStep,
}) => {
  const { action, state } = useStateMachine(updateAction)

  const onSubmit = (data) => {
    action(data)
    if (nextStep) {
      history.push(nextStep)
    }
  }
  const onPrevious = () => {
    if (previousStep) {
      history.push(previousStep)
    }
  }

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" justify="space-between">
          <div>{children}</div>

          <Flex justify="space-between" className="buttonBar">
            {previousStep ? (
              <Button
                leftIcon="arrow-back"
                variantColor="teal"
                variant="outline"
                onClick={onPrevious}
                isLoading={formState.isSubmitting}
              >
                Back
              </Button>
            ) : (
              <div />
            )}
            <Button
              type="submit"
              rightIcon="arrow-forward"
              variantColor="teal"
              variant="solid"
              isLoading={formState.isSubmitting}
            >
              Next
            </Button>
          </Flex>
        </Flex>
      </form>
    </div>
  )
}

export default ModalForm
