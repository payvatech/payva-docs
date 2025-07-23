# Changelog

## [1.3.0](///compare/1.2.0...1.3.0) (2024-12-23)

### Features

- **download-invoice:** add pay now button 4ddfec9
- **download-invoice:** add pay now button e123e7a
- **download-invoice:** add transaction centrexId instead of db id 75983a7
- **download-invoice:** add transaction centrexId instead of db id ef3e9eb
- **download-invoice:** allow users to download an invoice statement for each successful transaction 7b6e260
- **download-invoice:** remove notes 4cc0d6b
- **impersonation:** allow admins to sign in 'as' another user ba8adbf
- **impersonation:** move impersonation banner above the user accordion aed718c
- **partner-overview:** hide Declined Applications in case total is 0 1c80db5
- **sales table-updates:** include centrexid in the sales table 29d46d4

## [1.2.0](///compare/1.1.0...1.2.0) (2024-12-16)

### Features

- add 'duplicate' contract status; extend statusPillVariants with lightGrey d7c8007
- add API keys page to manage partner's API key and Secret (initial requirements) d40f2d1
- add gtm to the dashboard for customer and parther roles 4a93af8
- add transactions page to show customers payments 38ccf44
- apply column visibility (remembered colomns) feature to transactions page 5dba815
- **clipboard:** add number formatting to grid 8a4a624
- **clipboard:** add utility for formatting phone numbers both domestic and international a0f5f4c
- **clipboard:** make icon only appear on hover d3f67c4
- **customer payments:** hide DECLINED contracts debe6f3
- integreate cc form into modal window; inmplement according to design aae7360
- keep columns visibility options and other user preferences in the db and persistant storage 8d3afdc
- **keys page:** add loading button state on key change a9c323c
- **keys page:** apply UI feedback; add UX fix on marking key viewed b9c603d
- **keys page:** apply UI feedback; rename secrets page route 13e8afe
- **keys page:** rename secrets page sidebar link ffa645b
- **one-time payment:** add core of One-Time Payment page for customer 84d4b2c
- **one-time payment:** add one-time payment review dialog 47fe693
- **one-time payment:** apply UI updates for the one time payment form aa38164
- **one-time payment:** style one-time payment save CC notice; update text 31d84ff
- **one-time payment:** update icon size bbed55a
- **one-time payment:** update one-time info msg; update payment preview modal 5a0db34
- **payment method:** add card-type data on payment info view; update states list 053095a
- **payment method:** add cc input to mutation; update schema 91b525e
- **payment method:** add countries and states; update cc form c1a5386
- **payment method:** add radio button element to the TileButton e2bf96e
- **payment method:** apply UI suggestions on CC form and Payment Method page 795aaae
- **payment method:** make CC form more responsive; update Dialog component 7f21159
- **payment method:** set default country for cc form; update payment method choice buttons; f8843f4
- **payment method:** split cardholderName; use paymentMethodInfo; update schema bbe4fb7
- **payment method:** update cc form; implement saving cc info mutation 0139a97
- **payment method:** update payment method page; add cc form ad1a26b
- **payments page:** update Note text to include support phone 5d419e6
- **plan details:** add customer address to plan details view 4749d77
- **sales table:** show '-' for Plan Type when contract status is Duplicate 44a7c2e
- **sales-page:** add customer billing address to the table 2589dcf
- **sales-page:** add customer billing address with fallback to address 6bb9164
- **sales-page:** add declined contract status condition for underwriting decigions af14bb8
- **sales-page:** change Credit Insightas to Underwriting Factors text 037c05a
- **sales-page:** change planType for DECLINED advances to '-' 7ecfc46
- **sales-page:** display credit insights for advances; add such field to csv export 041902c
- **sales-page:** display underwriting decigion reasons for advances c8e5313
- **sales-page:** swap plan type and start date in plan details 845c84e
- **sales-table:** calculate Payments made based on amountPaid grater than 0 edf4dc1
- **sales-table:** revert calculate Payments made based on amountPaid grater than 0 7e607c7
- **secret-keys:** mark partner's secret as viewed; update UI with info message 63d042c
- **secret-keys:** rename page and related logic 25b5b9d
- **secret-keys:** update merchant ID styles fb9d912
- show '-' for Payment Method when adv status is Duplicate or Declined; create helper method 76ee7b1
- **transactions:** update buttons padding from px-3 to px-4 14e4f85
- **transactions:** update columns content in transactions table 9b25b61
- **transactions:** update table's topbar layout with date-range on top a72572c
- **transactions:** update the icon for transactions page link in sidebar 83ce353
- update collections contract statuses 6601628
- **users table:** add the date of last sign in c4b0f35

### Bug Fixes

- add missing properties to schema; fix eslint issues 3cc652b
- **caching:** update memory caching technique 2103c13
- **customer-payments:** get paymentsMade from contract instead of transactions for customer 73db6b0
- **customer-payments:** handle payments for customer with multiple advances a023de8
- fix fallback from billing address to address b82f5ad
- issue with freezing page on empty table interactions ad47297
- **keys page:** fix keys in dark mode; show stars if secret is viewed 42bb237
- **keys page:** fix rounding, page content padding and buttons resposivness d70fb84
- **one-time payment:** fix amount on-blur, spacing for Consent, cc form in dark mode 960848f
- **payment method:** center Update Payment Method button for ACH bbd6b29
- **payment method:** fix payment choice buttons, scrollbar and Update Payment Method btn on mobile 694d194
- **payment-method:** allow 15 digits card numbers for AMEX 7279309
- **payment-method:** fix creating plaid link in case of CC payment method saved 7630bd0
- **payouts:** display open status as pending for partner payout 2a0e742
- **payouts:** fix disabling table's toolbar datarange 5abcdc6
- **payouts:** fix margin for previous and next buttons on mobile f6bbd79
- **payouts:** fix responsivness for date range block; text changes 1ec9969
- remove resetUser from signout logic to fix stucking page ae3e431
- **sales table:** add missing icons for Payment Method column c98236d
- **sales-page:** fix underwritingReason data appearence condition in Plan details d0c90d5
- set N/A fallback to placeholder address (international addresses workaround on Centrex) 1e3e872
- **transactions page:** correct font and text of page title; add partner name e4229f2
- update using plaid link to prevent not ready state; make sure linkToken is properly created e368f4c
- **zip:** allow for any zipcode not just US d0b9ee8

### Code Refactoring

- rename 'revoked' -> 'isRevoked' 7b411cd

### Reverts

- Revert "Revert "feat(sales-page): add customer billing address to the table"" 0f5cadb
- Revert "Revert "Feat/payment method page with cc choice"" 2688dad

## [1.1.0](///compare/1.0.0...1.1.0) (2024-07-31)

### Features

- **sales-table:** add Plan Name and filter to the Sales table 49adbfc
- **sales-table:** make Plan Name in Sales table hidden by default f024b53

### Bug Fixes

- remove sensitive data from toast message; add logging for debugging purpose c29ef66
- update Plaid integration to handle payment method updates f3b7586
- **use-me:** replace customer with customers ([#80](undefined/undefined/undefined/issues/80)) 466d9ff

### Chores

- **contract-status:** add ApprovedPendingPayment status ([#82](undefined/undefined/undefined/issues/82)) b3dc0c0
- **csv:** add processed and cleared date ([#84](undefined/undefined/undefined/issues/84)) de4f8e2
- **links:** add token as query param to abandonedForms and linkBuilder ([#83](undefined/undefined/undefined/issues/83)) 2f80d2c
- trigger deployment test 5ec47f0
- trigger repo post-tranfer deployment b946dbb

### Documentation

- **CONTRIBUTING:** fix typo 7435e60
- fix typos in readme and contributing 491e79f

### Code Refactoring

- **date-range-picker:** improve date filtering ([#81](undefined/undefined/undefined/issues/81)) f3bc626

## [1.0.0](https://github.com/strvcom/myabundant-frontend-react/compare/0.8.1...0.8.2) (2024-06-26)

### Chores

- add payment number ([#75](https://github.com/strvcom/myabundant-frontend-react/issues/75)) ([320fc62](https://github.com/strvcom/myabundant-frontend-react/commit/320fc62b036cc7bb7bfa5576df0330293c59c558))
- adjust spacings on mobile ([#73](https://github.com/strvcom/myabundant-frontend-react/issues/73)) ([0626167](https://github.com/strvcom/myabundant-frontend-react/commit/06261672a2d54d5703b9c813573bd7bb51028c7c))
- **customer-bank-account:** add gap spacing ([#70](https://github.com/strvcom/myabundant-frontend-react/issues/70)) ([7f4084e](https://github.com/strvcom/myabundant-frontend-react/commit/7f4084e3d06d9bf39acd655c4e5183da2175f499))
- **customer-portal:** adjust responsiveness ([#71](https://github.com/strvcom/myabundant-frontend-react/issues/71)) ([5faf800](https://github.com/strvcom/myabundant-frontend-react/commit/5faf800c814b4c47538875aae7cacb28510992bb))
- **header:** add logo and change bg color ([#74](https://github.com/strvcom/myabundant-frontend-react/issues/74)) ([d620570](https://github.com/strvcom/myabundant-frontend-react/commit/d620570106dfebbc456b7446c68ce62fcc31d2e9))
- **mobile-payments-table:** show processed date instead of cleared date ([#72](https://github.com/strvcom/myabundant-frontend-react/issues/72)) ([cc2579e](https://github.com/strvcom/myabundant-frontend-react/commit/cc2579e2cfe67f4fe74583ddb0b28541b8e64ce1))
- **package.json:** bump version to 1.0.0 ([#79](https://github.com/strvcom/myabundant-frontend-react/issues/79)) ([ecf0122](https://github.com/strvcom/myabundant-frontend-react/commit/ecf0122e25263697fe94d078dbb1ea5401c9c66e))
- remove unused files ([#78](https://github.com/strvcom/myabundant-frontend-react/issues/78)) ([c1eeb2c](https://github.com/strvcom/myabundant-frontend-react/commit/c1eeb2c091f2c99b4c228440584e85057c11e591))
- update env and remove github release ([#76](https://github.com/strvcom/myabundant-frontend-react/issues/76)) ([95ab1e3](https://github.com/strvcom/myabundant-frontend-react/commit/95ab1e3a87d85611926d18eb2aa0dc7d38a22215))

### Documentation

- update README and add CONTRIBUTING guidelines ([#77](https://github.com/strvcom/myabundant-frontend-react/issues/77)) ([a55d972](https://github.com/strvcom/myabundant-frontend-react/commit/a55d972c0106fa9f6e2e7465f3e4bcffad58ae20))

## [0.8.2](https://github.com/strvcom/myabundant-frontend-react/compare/0.8.1...0.8.2) (2024-06-19)

### Chores

- adjust mobile responsiveness ([#69](https://github.com/strvcom/myabundant-frontend-react/issues/69)) ([99918c0](https://github.com/strvcom/myabundant-frontend-react/commit/99918c0683f757f4c1597f67db860f74cebcadc5))
- **customer:** add billing address ([#68](https://github.com/strvcom/myabundant-frontend-react/issues/68)) ([6eb28ec](https://github.com/strvcom/myabundant-frontend-react/commit/6eb28ecae1fdfcd2e2ad854479c0de4c23aa7e6d))
- release v0.8.2 ([4517f3f](https://github.com/strvcom/myabundant-frontend-react/commit/4517f3fd05291d5124460c9742bc8058979d7c77))

## [0.8.2](https://github.com/strvcom/myabundant-frontend-react/compare/0.8.1...0.8.2) (2024-06-19)

### Chores

- adjust mobile responsiveness ([#69](https://github.com/strvcom/myabundant-frontend-react/issues/69)) ([99918c0](https://github.com/strvcom/myabundant-frontend-react/commit/99918c0683f757f4c1597f67db860f74cebcadc5))
- **customer:** add billing address ([#68](https://github.com/strvcom/myabundant-frontend-react/issues/68)) ([6eb28ec](https://github.com/strvcom/myabundant-frontend-react/commit/6eb28ecae1fdfcd2e2ad854479c0de4c23aa7e6d))

## [0.8.1](https://github.com/strvcom/myabundant-frontend-react/compare/0.8.0...0.8.1) (2024-06-17)

### Chores

- **customer-portal:** add account type and bank name with couple of adjustments ([#67](https://github.com/strvcom/myabundant-frontend-react/issues/67)) ([66fa471](https://github.com/strvcom/myabundant-frontend-react/commit/66fa471d89d66900bda36236909f710038d1a810))

## [0.8.0](https://github.com/strvcom/myabundant-frontend-react/compare/0.7.0...0.8.0) (2024-06-14)

### Features

- add payment method with plaid [WIP] ([#62](https://github.com/strvcom/myabundant-frontend-react/issues/62)) ([91f8da9](https://github.com/strvcom/myabundant-frontend-react/commit/91f8da96d6378b7552e32483d11ee8dce408b3bb))

### Bug Fixes

- **use-sign-out:** remove resetUser ([#58](https://github.com/strvcom/myabundant-frontend-react/issues/58)) ([ab17444](https://github.com/strvcom/myabundant-frontend-react/commit/ab17444b63d273d50519e47572a3be166085762a))

### Chores

- add error toasts to queries ([#60](https://github.com/strvcom/myabundant-frontend-react/issues/60)) ([d2f40e2](https://github.com/strvcom/myabundant-frontend-react/commit/d2f40e2dfdf709d49b6dfa00672fd029329be41f))
- add my plans page and refactor dashboard page ([#66](https://github.com/strvcom/myabundant-frontend-react/issues/66)) ([8a27fef](https://github.com/strvcom/myabundant-frontend-react/commit/8a27fef219eb38869e4c2f3b1a86d3b191ad9184))
- **contract-status:** remove coach uw and underwriting complete ([#65](https://github.com/strvcom/myabundant-frontend-react/issues/65)) ([d803916](https://github.com/strvcom/myabundant-frontend-react/commit/d803916fba06bab1ae788e219e7ea4c35517ec49))
- **customer-contract:** add partner name ([#59](https://github.com/strvcom/myabundant-frontend-react/issues/59)) ([79475ed](https://github.com/strvcom/myabundant-frontend-react/commit/79475ed11e45bacc2c8916fdc7d2069c643c0b36))
- **customer-portal:** add adjustments ([#61](https://github.com/strvcom/myabundant-frontend-react/issues/61)) ([b3e8a2f](https://github.com/strvcom/myabundant-frontend-react/commit/b3e8a2febbdff8da4ecefd3b7911684d66284573))
- **link-account:** add toast error for link token ([#64](https://github.com/strvcom/myabundant-frontend-react/issues/64)) ([f59b5dc](https://github.com/strvcom/myabundant-frontend-react/commit/f59b5dc5b832f7614ee074332a2bede4b85c0b36))
- **link-account:** refetch bank account on success ([#63](https://github.com/strvcom/myabundant-frontend-react/issues/63)) ([1f6b141](https://github.com/strvcom/myabundant-frontend-react/commit/1f6b1414c3899b8d34547012695592d2801df51c))
- **partner-overview:** add 0 as default value for metrics ([#57](https://github.com/strvcom/myabundant-frontend-react/issues/57)) ([49bf878](https://github.com/strvcom/myabundant-frontend-react/commit/49bf878ad09f8929fd523a0e4e99d191328d0060))

## [0.7.0](https://github.com/strvcom/myabundant-frontend-react/compare/0.6.0...0.7.0) (2024-06-11)

### Features

- **dashboard:** add customer overview ([#55](https://github.com/strvcom/myabundant-frontend-react/issues/55)) ([079ba78](https://github.com/strvcom/myabundant-frontend-react/commit/079ba78790b760be82d30bfbdb6ce011d95de4d0))

### Chores

- add improvements and adjustments ([#54](https://github.com/strvcom/myabundant-frontend-react/issues/54)) ([020e788](https://github.com/strvcom/myabundant-frontend-react/commit/020e7889d89ccf2cdbd8affb7b64939f0d062c7d))
- add page head titles ([#52](https://github.com/strvcom/myabundant-frontend-react/issues/52)) ([6c309a5](https://github.com/strvcom/myabundant-frontend-react/commit/6c309a5850afaea3a2fd2bd0f1a1a82a5e57b7b4))
- add some adjustments ([#56](https://github.com/strvcom/myabundant-frontend-react/issues/56)) ([64066b9](https://github.com/strvcom/myabundant-frontend-react/commit/64066b9d448f76b31de2c1a904f008fdf5825336))
- **deps:** update prettier-plugin-tailwindcss ([#44](https://github.com/strvcom/myabundant-frontend-react/issues/44)) ([6b21f17](https://github.com/strvcom/myabundant-frontend-react/commit/6b21f1769b4aa95a613fd2e4a5b03e1820a8c164))
- **links:** rename help and support links ([#48](https://github.com/strvcom/myabundant-frontend-react/issues/48)) ([8d98a56](https://github.com/strvcom/myabundant-frontend-react/commit/8d98a567d6865453397f8a0b437c665696b89627))
- **partners-sales-table:** add email search input ([#49](https://github.com/strvcom/myabundant-frontend-react/issues/49)) ([3157ca7](https://github.com/strvcom/myabundant-frontend-react/commit/3157ca7ad5a8f599f5046d705717afd91b26f99f))
- **payouts:** export ungrouped transactions ([#50](https://github.com/strvcom/myabundant-frontend-react/issues/50)) ([40d9b1d](https://github.com/strvcom/myabundant-frontend-react/commit/40d9b1d09bf92ac86a4917541a5397dcf5b0b9e4))
- **sale-details:** add payment numbers in payments tables ([#47](https://github.com/strvcom/myabundant-frontend-react/issues/47)) ([e06728b](https://github.com/strvcom/myabundant-frontend-react/commit/e06728ba640538facb90e4970baea1bc7a78f050))
- set initial sorting for selected tables ([#53](https://github.com/strvcom/myabundant-frontend-react/issues/53)) ([f057625](https://github.com/strvcom/myabundant-frontend-react/commit/f05762551ea80902ae4bcb2276500b388a6ef458))
- show N/A when phoneNumber is null ([#51](https://github.com/strvcom/myabundant-frontend-react/issues/51)) ([f5ba0d9](https://github.com/strvcom/myabundant-frontend-react/commit/f5ba0d985bfbaa99fd4b4105d8353349cedac497))
- **sign-in:** reset user state ([#45](https://github.com/strvcom/myabundant-frontend-react/issues/45)) ([9db8623](https://github.com/strvcom/myabundant-frontend-react/commit/9db8623684e8d1cfb1c046053da730e02e5b3261))
- update payment status ([#42](https://github.com/strvcom/myabundant-frontend-react/issues/42)) ([dc6a50e](https://github.com/strvcom/myabundant-frontend-react/commit/dc6a50eab20a2a9dfa681c29a0e7872916323525))
- **use-partners-sales-table:** change plan types order ([#43](https://github.com/strvcom/myabundant-frontend-react/issues/43)) ([e801275](https://github.com/strvcom/myabundant-frontend-react/commit/e801275604851ef7206317d0ff74abe1ccd4d559))

### Code Refactoring

- **payouts:** implement new query with date filter ([#46](https://github.com/strvcom/myabundant-frontend-react/issues/46)) ([5e04a64](https://github.com/strvcom/myabundant-frontend-react/commit/5e04a64814a0de3aecf764345610c7f45ef38905))

## [0.6.0](https://github.com/strvcom/myabundant-frontend-react/compare/0.5.4...0.6.0) (2024-06-03)

### Features

- add partner select for sales rep ([#41](https://github.com/strvcom/myabundant-frontend-react/issues/41)) ([ca17821](https://github.com/strvcom/myabundant-frontend-react/commit/ca178219ed27da0e9f5a95358d221380757d08ec))

### Bug Fixes

- stop propagation in checkboc select in tables ([#38](https://github.com/strvcom/myabundant-frontend-react/issues/38)) ([458d9f1](https://github.com/strvcom/myabundant-frontend-react/commit/458d9f14f72e4c2fcef182f7fa6a3dedf6d88071))

### Chores

- add improvements ([#35](https://github.com/strvcom/myabundant-frontend-react/issues/35)) ([71aae92](https://github.com/strvcom/myabundant-frontend-react/commit/71aae92c3c515474b8a7acd17e50539422b27413))
- add missing payout fields ([#40](https://github.com/strvcom/myabundant-frontend-react/issues/40)) ([36ed93e](https://github.com/strvcom/myabundant-frontend-react/commit/36ed93eb7f0a49b7429798b7644576c3d09c0a79))
- **partners-table:** add size-full to icon links ([#37](https://github.com/strvcom/myabundant-frontend-react/issues/37)) ([d59c40e](https://github.com/strvcom/myabundant-frontend-react/commit/d59c40e816a14b749d7d9f3861bc98a8f5ab10ee))
- replace icons for sales and payouts ([#36](https://github.com/strvcom/myabundant-frontend-react/issues/36)) ([9c65c0a](https://github.com/strvcom/myabundant-frontend-react/commit/9c65c0a102f16aecb0fff22835241ca06d114c7f))
- update contract status ([#39](https://github.com/strvcom/myabundant-frontend-react/issues/39)) ([986cf0d](https://github.com/strvcom/myabundant-frontend-react/commit/986cf0d8cf40c3745b239c5bc94a0bbe497497e2))

## [0.5.4](https://github.com/strvcom/myabundant-frontend-react/compare/0.5.3...0.5.4) (2024-05-28)

### Chores

- add requested changes ([#32](https://github.com/strvcom/myabundant-frontend-react/issues/32)) ([ded3fab](https://github.com/strvcom/myabundant-frontend-react/commit/ded3fabcef42f32a62284728279e04c25b577e4a))
- adjustments ([#34](https://github.com/strvcom/myabundant-frontend-react/issues/34)) ([c8ba564](https://github.com/strvcom/myabundant-frontend-react/commit/c8ba5647d21fa0bb1acce4cb01a1ca8c6dc78a89))
- **dashboard:** add partner overview metrics ([#33](https://github.com/strvcom/myabundant-frontend-react/issues/33)) ([a9b92db](https://github.com/strvcom/myabundant-frontend-react/commit/a9b92db07976c9ed4744de1a280a43c385faeee2))
- **payouts:** add date ranger filter ([#30](https://github.com/strvcom/myabundant-frontend-react/issues/30)) ([5156040](https://github.com/strvcom/myabundant-frontend-react/commit/51560400ea307c99f4a3e4abacc93948d5d1a2ce))

### Code Refactoring

- **contract-status:** remap variants ([#31](https://github.com/strvcom/myabundant-frontend-react/issues/31)) ([87af70c](https://github.com/strvcom/myabundant-frontend-react/commit/87af70ce0b86def8f13ebd37086aba07ea18b8cf))

## [0.5.3](https://github.com/strvcom/myabundant-frontend-react/compare/0.5.2...0.5.3) (2024-05-23)

### Chores

- **payment-status:** add getPaymentStatusDisplayName ([#28](https://github.com/strvcom/myabundant-frontend-react/issues/28)) ([2c74798](https://github.com/strvcom/myabundant-frontend-react/commit/2c74798b1ddfb1ac1c21de4835b58bd0bee8957c))
- **payouts-table:** add hardcoded status and payment method columns ([e256008](https://github.com/strvcom/myabundant-frontend-react/commit/e25600861892133878878afd1162472c1d6e677f))
- **payouts-table:** add sheet with sale details ([#26](https://github.com/strvcom/myabundant-frontend-react/issues/26)) ([3366ac8](https://github.com/strvcom/myabundant-frontend-react/commit/3366ac8ca9620b7e9c128a475b1402471d12b5f6))
- **sale-details:** add isSheet with close button ([#27](https://github.com/strvcom/myabundant-frontend-react/issues/27)) ([0d1887d](https://github.com/strvcom/myabundant-frontend-react/commit/0d1887de2c0bb7dec625615e653ac45baa2b9854))

### Code Refactoring

- **partners-table:** replace actions column with 2 columns ([#29](https://github.com/strvcom/myabundant-frontend-react/issues/29)) ([e38b987](https://github.com/strvcom/myabundant-frontend-react/commit/e38b9875b2690e48ad627d735262668d7ded9c9e))

## [0.5.2](https://github.com/strvcom/myabundant-frontend-react/compare/0.5.1...0.5.2) (2024-05-22)

### Chores

- **partners:** move actions column to beginning ([f69eeba](https://github.com/strvcom/myabundant-frontend-react/commit/f69eeba0d76be062f27688e5c31974ee3879df47))
- **payments:** add improvements ([#24](https://github.com/strvcom/myabundant-frontend-react/issues/24)) ([c855097](https://github.com/strvcom/myabundant-frontend-react/commit/c85509763ce2703a0602e6e117aeb626a2f34870))

### Code Refactoring

- **payouts:** add collapsible content v1 ([#25](https://github.com/strvcom/myabundant-frontend-react/issues/25)) ([f9b4fee](https://github.com/strvcom/myabundant-frontend-react/commit/f9b4fee83ca76839a1cee04cc3c7cd54284c20c8))

## [0.5.1](https://github.com/strvcom/myabundant-frontend-react/compare/0.5.0...0.5.1) (2024-05-22)

### Chores

- add partners payment page ([#23](https://github.com/strvcom/myabundant-frontend-react/issues/23)) ([fbe9130](https://github.com/strvcom/myabundant-frontend-react/commit/fbe91305565daa8c7ad09e6b4e5ba6d6863e6baa))

### Code Refactoring

- replace customer details flyout with sale page ([#22](https://github.com/strvcom/myabundant-frontend-react/issues/22)) ([4d519cc](https://github.com/strvcom/myabundant-frontend-react/commit/4d519cc4d9a870ba6ace826ab1f893be84774abd))

## [0.5.0](https://github.com/strvcom/myabundant-frontend-react/compare/0.4.0...0.5.0) (2024-05-21)

### Features

- **partner:** add payments table ([#21](https://github.com/strvcom/myabundant-frontend-react/issues/21)) ([632bcae](https://github.com/strvcom/myabundant-frontend-react/commit/632bcae55e88cf87357fd51eba51511a036477de))

### Chores

- **api:** update schema with new fields and enums ([#20](https://github.com/strvcom/myabundant-frontend-react/issues/20)) ([cef9984](https://github.com/strvcom/myabundant-frontend-react/commit/cef99843a87bbb0e9b95401aad03dc2e74123635))

## [0.4.0](https://github.com/strvcom/myabundant-frontend-react/compare/0.3.4...0.4.0) (2024-05-17)

### Features

- implement partners sales query ([#19](https://github.com/strvcom/myabundant-frontend-react/issues/19)) ([06477f5](https://github.com/strvcom/myabundant-frontend-react/commit/06477f56cd5956e31be2689a73c8cb56fc093aa7))

## [0.3.4](https://github.com/strvcom/myabundant-frontend-react/compare/0.3.3...0.3.4) (2024-05-13)

### Chores

- add requested changes ([#18](https://github.com/strvcom/myabundant-frontend-react/issues/18)) ([9460e94](https://github.com/strvcom/myabundant-frontend-react/commit/9460e94f638bc63f8bee36262737a067027713be))

### Code Refactoring

- make sidebar sticky and tables scrollable ([#17](https://github.com/strvcom/myabundant-frontend-react/issues/17)) ([2d881f3](https://github.com/strvcom/myabundant-frontend-react/commit/2d881f3ac0e9b97cf6585ecf124868c66ba86f85))

## [0.3.3](https://github.com/strvcom/myabundant-frontend-react/compare/0.3.2...0.3.3) (2024-05-09)

### Chores

- add csv export ([#14](https://github.com/strvcom/myabundant-frontend-react/issues/14)) ([760f13c](https://github.com/strvcom/myabundant-frontend-react/commit/760f13c4cb03b271ba90118745af0268c073deba))
- add partners query ([#13](https://github.com/strvcom/myabundant-frontend-react/issues/13)) ([af11b81](https://github.com/strvcom/myabundant-frontend-react/commit/af11b81d895bf952b1fdc316617d0c6e71f5b4b1))
- **partners:** add csv export ([#16](https://github.com/strvcom/myabundant-frontend-react/issues/16)) ([05aa9d6](https://github.com/strvcom/myabundant-frontend-react/commit/05aa9d68a621ea8c78181fe61f03d03d7a93c043))

### Code Refactoring

- **customer-details:** add requested changes from client ([#15](https://github.com/strvcom/myabundant-frontend-react/issues/15)) ([cbafaba](https://github.com/strvcom/myabundant-frontend-react/commit/cbafaba9dfdd72c3a60a2b470e64ee7eb5f03b00))

## [0.3.2](https://github.com/strvcom/myabundant-frontend-react/compare/0.3.1...0.3.2) (2024-04-30)

### Chores

- implement USERS query ([#12](https://github.com/strvcom/myabundant-frontend-react/issues/12)) ([f5c2077](https://github.com/strvcom/myabundant-frontend-react/commit/f5c207747c0ef948c35c59e8f4c17ff095c52209))

## [0.3.1](https://github.com/strvcom/myabundant-frontend-react/compare/0.3.0...0.3.1) (2024-04-29)

### Bug Fixes

- **middleware:** update config matcher with public assets one by one ([a64ccdd](https://github.com/strvcom/myabundant-frontend-react/commit/a64ccdd95ad022d15c6d8229ef4763ffa93e25de))

### Chores

- implement ME query and add requested changes ([#11](https://github.com/strvcom/myabundant-frontend-react/issues/11)) ([2d77bed](https://github.com/strvcom/myabundant-frontend-react/commit/2d77bed409263b16697766241a15619980b8c7fa))

### Code Refactoring

- rename applications and applicant to sales and customers ([#10](https://github.com/strvcom/myabundant-frontend-react/issues/10)) ([8214fae](https://github.com/strvcom/myabundant-frontend-react/commit/8214faead939937a9eb9cb68f332237e23ef9e75))

## [0.3.0](https://github.com/strvcom/myabundant-frontend-react/compare/0.2.2...0.3.0) (2024-04-22)

### Features

- **auth:** integrate sign in api, protected routes with middleware, role management ([#9](https://github.com/strvcom/myabundant-frontend-react/issues/9)) ([c0440a3](https://github.com/strvcom/myabundant-frontend-react/commit/c0440a34f9b113d1eb5bb06bfadcc49dafd35db2))

### Chores

- ui improvements and table refactor ([#8](https://github.com/strvcom/myabundant-frontend-react/issues/8)) ([d60b14e](https://github.com/strvcom/myabundant-frontend-react/commit/d60b14e2ba9f66967ca118b156e9b42889982e70))

## [0.2.2](https://github.com/strvcom/myabundant-frontend-react/compare/0.2.1...0.2.2) (2024-04-17)

### Chores

- setup GraphQL + Apollo client with codegen ([#6](https://github.com/strvcom/myabundant-frontend-react/issues/6)) ([ce721c5](https://github.com/strvcom/myabundant-frontend-react/commit/ce721c5dc7b8d8c6ba45ff108786aa3660291fec))
- ui improvements ([#7](https://github.com/strvcom/myabundant-frontend-react/issues/7)) ([e07d9b0](https://github.com/strvcom/myabundant-frontend-react/commit/e07d9b0b5b251b882cd38ccb50821d7608e1df0f))

## [0.2.1](https://github.com/strvcom/myabundant-frontend-react/compare/0.2.0...0.2.1) (2024-04-11)

### Chores

- add Dashboard and Users tables with mocked data ([#5](https://github.com/strvcom/myabundant-frontend-react/issues/5)) ([94b0b5f](https://github.com/strvcom/myabundant-frontend-react/commit/94b0b5f7002700021a5b08d4c0ed8164c417e077))
- **sign-in:** remove position fixed from logo ([30ae758](https://github.com/strvcom/myabundant-frontend-react/commit/30ae758cc67cc1b51dd14a40734c219929217400))

## [0.2.0](https://github.com/strvcom/myabundant-frontend-react/compare/0.1.1...0.2.0) (2024-04-08)

### Features

- add sign in page with sidebar layout ([#4](https://github.com/strvcom/myabundant-frontend-react/issues/4)) ([ff38283](https://github.com/strvcom/myabundant-frontend-react/commit/ff3828391aa4c16b432a3a3dedde8e3f6ecb120d))
- set up design system ([#3](https://github.com/strvcom/myabundant-frontend-react/issues/3)) ([62d17b4](https://github.com/strvcom/myabundant-frontend-react/commit/62d17b4f579b7464f8d40b6b419ba077e04e63c1))

## 0.1.1 (2024-04-04)

### Chores

- add release it ([#2](https://github.com/strvcom/myabundant-frontend-react/issues/2)) ([867a467](https://github.com/strvcom/myabundant-frontend-react/commit/867a467d39751707c9db907a3a96bc7ef812aa1e))
- init project ([1ae61a1](https://github.com/strvcom/myabundant-frontend-react/commit/1ae61a13a37b4facbe4076da63a7c640f417ad0f))
- project setup ([#1](https://github.com/strvcom/myabundant-frontend-react/issues/1)) ([acf506f](https://github.com/strvcom/myabundant-frontend-react/commit/acf506f64fe5d0c4ecd93736116f8f4ae441732d))
- **release-it:** add conventional changelog ([3846a8d](https://github.com/strvcom/myabundant-frontend-react/commit/3846a8db78d8a4c5b41a7794b97497aee5c04c95))
