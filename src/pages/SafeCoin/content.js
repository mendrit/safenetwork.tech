export default {
  banner: {
    title: 'Vítejte v nové\n digitální ekonomice',
    desc: 'Safecoin je jádro celé sítě. Jsou to peníze, které ti umožní uložit data a odmění tě, pokud něčím přispěješ. Vše téměř okamžitě, s neomezenou škálovatelností a bez poplatků.',
  },
  video: {
    caption: 'Safecoin: Měna pro bezpečí a soukromí',
  },
  textBlock1: {
    title: 'Sdílej své prostředky a získáš odměnu',
    para: [
      'Safecoin je kryptoměna, jako žádná jiná. Digitální peníze, bez veřejného přístupu do historie plateb. Zde není omezení v počtu transakcí, které mohou proběhnout okamžitě, zároveň a soukromě.',
      'Vydělání si Safecoinů je jednoduché. Stačí si zvolit stát se farmářem a připojit svůj počítač do sítě. Pak stačí sledovat, jak síť automaticky a nepřetržitě přemisťují kousky dat po celém světě, aby zajistila efektivitu. "Proof of Resources" tedy důkaz zdrojů, zde plně nahrazuje mnohem dražší alternativu známou jako "Proof of Work".',
      'Safecoiny můžou být použity k nákupu zdrojů na síti, jako jednorázový poplatek za nahrání dat, nebo výměnou za zboží a služby, jako každá jiná měna.',
    ],
  },
  textBlock2: {
    title: 'Podílej se a získej SafeCoiny',
    para: [
      'Dnešní ekonomický model Internetu nefunguje tak, jak by měl. V SafeNetwork oblíbené aplikace a stránky, dostanou zaplaceno přímo sítí, dle toho, jak moc jsou používány.',
      'Rád tvoříš obsah, nebo vyvíjíš apliakce? Už nebude potřeba pokrývat náklady za infrastrukturu. S open source platformou postačí vyvinout a nasadit. Tvá osobní data už nadále nebude komoditou pro zisk ostatních.'
    ],
    CTA: {
      name: 'Začni vyvíjet',
      url: 'https://hub.safedev.org/'
    }
  },
  textBlock3: {
    title: 'Plať anonymně, dostaň zaplaceno soukromě.',
    para: [
      'Safecoin se chová jako digitální peníze. Na rozdíl od typu kryptoměn s blockchainem, zde není veřejný přístup do historie plateb. Pouze poslední a předchozí vlastník každé mince jsou si známi navzájem. Takže můžeš dostat zaplaceno v tajnosti.',
      'A také platit anonymně. Je to jen tvá volba.'
    ]
  },
  textBlock4: {
    title: 'Ehm, co znamená žádný blockchain?',
    para: [
      'Na rozdíl od většiny kryptoměn SafeCoin nebude mít blockchain. To znamená, že nemá problém se škálovatelností a neustále se zvětšující historií všech plateb.',
      'V kombinaci s mechanismem ověřovaní transakcí známým jako "Close Group Consensus", zajistí něco velmi speciálního: transakce jsou potvrzeny rychlosti sítě a navíc s nulovými poplatky.'
    ],
    CTA: {
      name: 'Co je "Close Group Consensus"?',
      url: '/faq/#what-is-close-group-consensus'
    }
  },
  textBlock5: {
    title: 'Jak koupit SafeCoin?',
    para: [
      'SafeCoin je kryptoměna, která bude jádrem SafeNetwork. Bude k dispozici pro farmáře, nákupy atd. Prozatím si je však nemůžeš nijak pořídit, ale můžeš si koupit MaidSafeCoin.',
      'MaidSafeCoin (MAID) je token, který byl vytvořen v roce 2014, aby se podpořil vývoj tohoto projektu. Každý MAID bude vyměněn v poměru 1:1 za SafeCoin při startu síě. MAID je založen na Omni protokolu, který je nádstavbou Bitcoin blockchainu. Je dostupný na směnárnách, ale nelze jej získat farmářením.'
    ]
  },
  textBlock6: {
    title: 'Kup si MaidSafeCoin',
    para: [
      'MaidSafeCoin může být koupen a vyměněn na těchto směnárnách. Neustále se snažíme rozšířit tento seznam  dostupných míst.',
      'MAID je založen na Omni protokolu a je zde omezený počet možností jak spravovat MAID. Doporučujeme na harware peněžence Trezor, nebo bezpečně uložené v papírové podobě na Bitcoin adrese. Důležité je, mít před dalším přesunem na stejné adrese alespoň 0,0001 Bitcoinů na poplatek. Jedině tak budou bezpečně přpraveny na start sítě a změnu na SafeCoin '
    ]
  },
  exchanges: [
    {
      name: 'Bittrex',
      url: 'https://international.bittrex.com/Market/Index?MarketName=BTC-MAID'
    },
    {
      name: 'Chainrift',
      url: 'https://www.chainrift.com/trading?coinpair=MAID/BTC&'
    },
    {
      name: 'HitBTC',
      url: 'https://hitbtc.com/MAID-to-BTC'
    },
  ],
  faqs: {
    sections: [
      {
        title: 'Safecoin: Čato kladené otázky',
        items: [
          {
            question: 'What is Safecoin?',
            answer: [
              `Safecoin are digital tokens that are generated automatically by the SAFE Network and reside on the SAFE Network. The Network will autonomously confirm account balances to wallets and allow transactions to take place. Safecoin are transferred using the digital signature of the coin’s last owner. This operation is 'network atomic'—in other words,the Network ensures that all copies update to reflect the transaction. This is a different approach to the blockchain mechanism employed in other projects, such as Bitcoin.`,
              'There can be many millions of transactions per second on the SAFE Network and the larger it becomes the more transactions per second can be executed. A Safecoin only records the previous and current owners. By doing so, it ensures that the current owner was transferred ownership properly by the last owner. This allows coins to be transferred between people very easily and without delay.',
              'Please note that Safecoin will not be active until the network goes live. See MaidSafeCoin for current proxy token.'
            ]
          },
          {
            question: 'How is Safecoin used on the network?',
            answer: [
              'Safecoin is the currency of the SAFE Network. It is an incentive mechanism that rewards Users and developers, as well as providing access to network services.',
              'Without any human intervention, the SAFE Network pays out Safecoin automatically to Farmers (users who join the Network by contributing their computing resources) and to Builders (application developers, who get paid automatically depending on how much their applications are used).',
              'In addition, Core Developers who improve the core SAFE Network codebase can also earn Safecoin by providing bug fixes and new features.',
              `Safecoin only lives on the SAFE Network. It is stored in a User's wallet and can be used to buy network services, such as increased storage space and access to network applications. There is no set distribution time for the 4.3 billion Safecoin produced during the life of the SAFE Network.`,
              'Please note that Safecoin will not be active until the network goes live. See for current proxy token.'
            ]
          },
          {
            question: 'How do I buy Safecoin?',
            answer: [
              'Safecoin won’t be issued until the Network goes live so they cannot be purchased at the moment. Currently you can buy MaidSafeCoin which will be swapped on a 1-to-1 basis for Safecoin when it is released.'
            ]
          },
          {
            question: 'What is MaidSafeCoin?',
            answer: [
              `MaidSafeCoin is a proxy token that was released during MaidSafe's crowd sale and will be swapped for Safecoin on a 1:1 basis when Safecoin is released. MaidSafeCoin is listed on the bitcoin blockchain and can be purchased on a number of exchanges including:`,
              '- [Poloniex](https://www.poloniex.com/exchange#btc_maid)\n- [HitBTC](https://hitbtc.com/MAID-to-BTC)\n- [Bittrex](https://international.bittrex.com/Market/Index?MarketName=BTC-MAID)'
            ]
          },
          {
            question: 'How do I buy MaidSafeCoin?',
            answer: [
              'In essence all we have to do is buy bitcoin and exchange it for MaidSafeCoin. There are a few simple steps required to do this.',
              '- Create an [OmniWallet](http://omniwallet.org/).\n- Purchase bitcoin using your preferred vendor.\n- Create a trade account on an exchange which lists MaidSafeCoin (e.g. on [Poloniex](https://www.poloniex.com/exchange#btc_maid)).\n- Send bitcoin to the trading account.\n- Trade bitcoin for MaidSafeCoin.\n- Withdraw / Transfer to OmniWallet.\n- MaidSafeCoin is now in your OmniWallet!'
            ]
          },
          {
            question: 'Where can I store MaidSafeCoin?',
            answer: [
              'As MaidSafeCoin is built using the Omni protocol on the bitcoin blockchain it can be stored in any wallet. They may not be visible within all wallet software (due to lack of omni support) but the MaidSafeCoin will be OK there as long as your machine and private key for that address are secure. You will be able to view them using [omniexplorer.info](http://omniexplorer.info).',
              'To create a new Omniwallet or open an existing one visit [omniwallet.org](https://www.omniwallet.org/).'
            ]
          },
          {
            question: 'What is Farming?',
            answer: [
              'Safecoin are given as an incentive to users for providing their resources to the Network. These resources are their: storage space, CPU, bandwidth and online time that enable the encrypted chunks of network data to be stored and retrieved from their computer.',
              'The process of providing resources and receiving Safecoin in return is called ‘Farming’.',
              `Each piece of encrypted network data is stored in a Farmer's ‘Vault’, a data storage and management location on the Farmer's computer which they cannot read, or access. The SAFE network is designed to self-manage these resources.`,

            ]
          },
          {
            question: 'How will Farming work?',
            answer: [
              'When a user of the network requests some data, for example by browsing a website, a number of things happen: First, the client software makes a request for the required data chunks. This message (a GET request) is then propagated across the Network and when the chunk is found there is a competition between the Vaults in that Section to deliver it to the Network where it will be routed back to the requester.  The first Vault to deliver will have a chance of being rewarded with one Safecoin. This is described as a Farming Attempt.',
              'Farming Attempt means: by delivering data chunks when requested, a Vault occasionally gains the opportunity to make a Farming Attempt. This consists of sending a validated request to a random Safecoin address. If an owned Safecoin already exists at that address, the Attempt fails. If there is no Safecoin there, one is created and awarded to the requesting Vault (i.e. a successful Farming Attempt has been made).',
              'Farming is therefore when a Vault delivers data chunks that it is storing to the network and earns Safecoin in return. The probability of gaining a Farming Attempt is dependent on the farming_rate, which is a variable related to the quantity of available storage resources in the Network.'
            ]
          },
        ],
      }
    ],
    CTA: {
      name: 'More FAQs',
      url: '/faq/'
    }
  }
}
