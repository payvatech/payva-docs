interface NotificationBannerProps {
  type?: 'signin' | 'other'
}

const NotificationBanner = ({ type = 'signin' }: NotificationBannerProps) => {
  let newMessage = <span></span>
  if (type === 'signin') {
    newMessage = (
      <span>
        <span>
          We&apos;re aware of a data sync issue and are actively working on a fix.
          <br />
          {/* <span className="ml-4">
            {' '}
            * If you are able to sign in, you&apos;re good to go. If you are unable to sign in, we apologize for the
            inconvenience.
          </span> */}
          {/* <br /> */}
          <span className="ml-4"> * Thank you for your patience! </span>
        </span>
      </span>
    )
  } else {
    newMessage = (
      <span>
        <span>
          We&apos;re aware of a data sync issue and are actively working on a fix.
          <br />
          {/* <span className="ml-4">
            {' '}
            * Please be assured that payments and payouts are unaffected and working as normal.
          </span> */}
          {/* <br /> */}
          <span className="ml-4"> Thank you for your patience!</span>
        </span>
      </span>
    )
  }

  return (
    <div className="mb-4 rounded-md bg-yellow-100 p-4">
      <p className="text-sm text-yellow-800"> {newMessage} </p>
    </div>
  )
}

export { NotificationBanner }
