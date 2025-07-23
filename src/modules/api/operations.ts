import { gql } from '@apollo/client'

export const SIGN_IN = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input) {
      user {
        firstName
        id
        lastName
        role
        userPreferences {
          id
          userId
          preferences {
            columnVisibility
          }
        }
      }
      token
    }
  }
`

export const PLATFORM_TOKENS = gql`
  mutation platformToken($token: String!) {
    platformToken(token: $token) {
      valid
    }
  }
`

export const MOCK_WEBHOOKS_MUTATION = gql`
  mutation MockWebhooks($webhookType: PlatformWebhooksType!, $orderId: String, $paymentAmount: String, $status: String) {
    mockWebhooks(webhookType: $webhookType, orderId: $orderId, paymentAmount: $paymentAmount, status: $status) {
      merchant_status {
        event_type
        event_date
        merchant_id
        status
        external_merchant_id
        level
      }
      payment_success {
        event_type
        event_date
        order_id
        checkout_id
        payment_amount
        payment_date
      }
      payment_failure {
        event_type
        event_date
        order_id
        checkout_id
        payment_amount
        payment_date
      }
      payout {
        order_id
        checkout_id
        payment_amount
        payment_date
      }
      status_change {
        event_type
        event_date
        order_id
        checkout_id
        plan_id
        old_status
        status
      }
    }
  }
`
