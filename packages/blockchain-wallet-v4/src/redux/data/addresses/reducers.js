import { indexBy, prop } from 'ramda'
import * as T from '../../actionTypes.js'

const INITIAL_STATE = {}

const addressesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case T.common.SET_BLOCKCHAIN_DATA: {
      const addresses = prop('addresses', payload)
      return indexBy(prop('address'), addresses)
    }
    default:
      return state
  }
}

export default addressesReducer