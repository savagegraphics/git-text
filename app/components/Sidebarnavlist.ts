export type Item = {
  name: string
  slug: string
  icon: string
}

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Merchant',
    items: [
      {
        name: 'Merchant',
        slug: 'Merchant',
        icon: '/nextsvg/Merchant.svg'
      },
      {
        name: 'Add Products',
        slug: 'Products',
        icon: 'nextsvg/Products.svg'
      },
      {
        name: 'Deliveries',
        slug: 'Deliveries',
        icon: 'nextsvg/truck.svg'
      },
      {
        name: 'Wallet',
        slug: 'Wallet',
        icon: 'nextsvg/Wallets.svg'
      },
      {
        name: 'Fulfilment Center',
        slug: 'Fulfilment',
        icon: 'nextsvg/Fulfilment.svg'
      },
      {
        name: 'Get Estimate',
        slug: 'Estimate',
        icon: 'nextsvg/Estimate.svg'
      },
      {
        name: 'International',
        slug: 'International',
        icon: 'nextsvg/International.svg'
      },
      {
        name: 'Track Shipment',
        slug: 'Tracking',
        icon: 'nextsvg/Shipment.svg'
      },
      {
        name: 'Invite & Earn',
        slug: 'Earn',
        icon: 'nextsvg/Earn.svg'
      },
      {
        name: 'Log Out',
        slug: 'LogOut',
        icon: 'nextsvg/Logout.svg'
      }
    ]
  }
]
