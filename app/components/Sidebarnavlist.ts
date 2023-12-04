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
        name: 'Track Shipment',
        slug: 'Tracking',
        icon: 'nextsvg/Shipment.svg'
      },
      {
        name: 'Log Out',
        slug: 'LogOut',
        icon: 'nextsvg/Logout.svg'
      }
    ]
  }
]
