import { cn } from '@/lib/utils'

interface TermsAndConditionsProps {
  className?: string
  isPayva?: boolean
}

const TermsAndConditions = ({ className = '', isPayva }: TermsAndConditionsProps) => {
  return (
    <div className={cn('text-left text-xs leading-[1.3em]', className)}>
      By accessing this website or using the Payva service, you agree to be bound by the{' '}
      <a
        href="https://payva.com/terms/"
        target="_blank"
        rel="noopener noreferrer"
        className={`font-semibold ${isPayva ? 'text-payva-purple-800' : 'text-brand-tertiary'}`}
      >
        Payva Terms of Service
      </a>
      ,{' '}
      <a
        href="https://payva.com/esign-consent/"
        target="_blank"
        rel="noopener noreferrer"
        className={`font-semibold ${isPayva ? 'text-payva-purple-800' : 'text-brand-tertiary'}`}
      >
        Payva E-Sign Consent Agreement
      </a>
      , and{' '}
      <a
        href="https://payva.com/privacy/"
        target="_blank"
        rel="noopener noreferrer"
        className={`font-semibold ${isPayva ? 'text-payva-purple-800' : 'text-brand-tertiary'}`}
      >
        Payva Privacy Policy
      </a>
      .{' '}
      {!isPayva &&
        `If you do not agree with these terms, please do not access the Payva website or continue to use the
      Payva service. Payva is an alternative financing platform offering invoice servicing. Payva does
      not offer consumer loans. All credit checks performed are “soft-pull” pre-qualification checks that will not
      impact your credit score or show as an inquiry on your credit report.`}
    </div>
  )
}

export { TermsAndConditions }
