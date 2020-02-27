module.exports = data => {
  return {
    "@context": "https://openactive.io/",
    "@type": "OrderQuote",
    brokerRole: "https://openactive.io/AgentBroker",
    broker: {
      "@type": "Organization",
      name: "MyFitnessApp",
      url: "https://myfitnessapp.example.com",
      description: "A fitness app for all the community",
      logo: {
        "@type": "ImageObject",
        url: "http://data.myfitnessapp.org.uk/images/logo.png"
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Alan Peacock Way",
        addressLocality: "Village East",
        addressRegion: "Middlesbrough",
        postalCode: "TS4 3AE",
        addressCountry: "GB"
      }
    },
    seller: {
      "@type": "Organization",
      "@id": `${data.sellerId}`
    },
    customer: {
      "@type": "Person",
      email: "geoffcapes@example.com",
      telephone: "020 811 8055",
      givenName: "Geoff",
      familyName: "Capes"
    },
    orderedItem: [
      {
        "@type": "OrderItem",
        position: 0,
        acceptedOffer: {
          "@type": "Offer",
          "@id": `${data.offerId}`
        },
        orderedItem: {
          "@type": "ScheduledSession",
          "@id": `${data.opportunityId}`
        }
      }
    ]
  };
};
