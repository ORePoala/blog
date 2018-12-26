webpackJsonp([0xbfd5293f4d04],{803:function(e,t){e.exports={data:{post:{id:"/home/brute4s99/DEV/repos/blog/content/posts/2018-07-17--my_blockchain/index.md absPath of file >>> MarkdownRemark",html:'<blockquote>\n<p>Blockchain is a vast, <strong>global distributed ledger</strong> or database running on millions of devices and open to anyone, where not just information but anything of <strong>value</strong> — money, but also titles, deeds, identities, even votes — can be moved, stored and managed securely and privately. Trust is established through mass collaboration and clever code rather than by powerful intermediaries like governments and banks.<br>\n–Wikinomics</p>\n</blockquote>\n<p>So I’ve been reading all about blockchains (even those 12 point font research papers!). This is a rough gist of what I learnt:-</p>\n<h2>A distributed ledger</h2>\n<p>Wikipedia <a href="https://en.wikipedia.org/wiki/Distributed_ledger">explains</a> thus –</p>\n<blockquote>\n<p>“A distributed ledger is a consensus of replicated, shared, and synchronised digital data geographically spread across multiple sites, countries, or institutions. There is no central administrator or centralised data storage.”</p>\n</blockquote>\n<p>This seems too much condensed. Let me break it down for you.</p>\n<ul>\n<li>There is no central authority.</li>\n<li>Every transaction here occurs in front of an array of guards that maintain order and make sure the transactions are completed in full by both parties.</li>\n<li>These guards are just some computers that have volunteered to become a ‘node’. Only these nodes can validate the transactions of every user on a blockchain.</li>\n</ul>\n<p>Before we go any further, I need to tell you what a transaction means in this context.</p>\n<blockquote>\n<p>A transaction occurs when there is an exchange of data between any two parties. It need not be money only. It can be any data, you can even make a deal involving official papers of properties through some blockchain implementing platform!</p>\n</blockquote>\n<p>And if this sounds scary, don’t worry; no-one, not even those nodes (the ones which supervise the transactions) know what exactly you exchanged! Kudos to privacy! And that’s not even half of it! I’ll explain more later.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/explain1-4b86149016fc1278353a29434f0739d3-71f92.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 740px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAADwAwCdASoUAAoAPm0qkkWkIqGYBABABsSygFp0xeFjKPuYZbMOfsAAAP7zStKzoY6/ZxMizcxRD0vN4XCCD8x0EmWHXWBZ7noe2rLUQ5Hcn6XrZUqb+B1JRgQWzxop9pZF52CAu1P2leAoAXQAAA==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="conventional central authority"\n        title=""\n        src="/static/explain1-4b86149016fc1278353a29434f0739d3-71f92.jpg"\n        srcset="/static/explain1-4b86149016fc1278353a29434f0739d3-bae36.jpg 200w,\n/static/explain1-4b86149016fc1278353a29434f0739d3-845a6.jpg 400w,\n/static/explain1-4b86149016fc1278353a29434f0739d3-71f92.jpg 740w"\n        sizes="(max-width: 740px) 100vw, 740px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \nConsider the conventional case of a bank (a conventional central authority).</p>\n<blockquote>\n<p>NOTE : We are using ‘bank’ as an example just because it comprises a good amount of ‘transactions’. Always remember that these ‘transactions’ can be of data or goods too!</p>\n</blockquote>\n<p>So here, in a bank, all the transactions occurring between accounts would be verified by a single, central authority, and all your possessions currently with the bank would be at the mercy of the whims of the bank, the <strong>single point of security</strong> in the transaction. If, by any chance, the bank burns down (physical damage to central authority) or gets robbed (or hacked), or seizes your account (unethically or otherwise) , there would be consequences, the likes of which you most probably won’t be comfortable with.</p>\n<p>Enter blockchain with the power of consensus based distributed ledger! If we consider the case of bitcoin blockchain, there are about 7000 nodes in the network that all work for the security of all those precious bitcoins that keep soaring and falling by the minute. For bitcoin to fail, all these 7000 points of security would have to be attacked at the same time, or at-least half of them. Not only that, with the sky-high pricing of these virtual currencies, more and more people are opting in to become nodes, which adds to security of the users(traders) making transactions over bitcoin blockchain. <em>So that’s security for you and the ‘things’ you love!</em> If you wish to know more about blockchain that deals with data, check out ethereum. Ethereum is an open-source, public, blockchain-based distributed computing platform and operating system featuring smart contract functionality.</p>\n<h2><strong>Block</strong></h2>\n<p>A block is the ‘current’ part of a blockchain, which records some or all of the recent transactions. Once completed, a block goes into the blockchain as a permanent database. Each time a block gets completed, a new one is generated. There are countless such blocks in the blockchain, connected to each other (like links in a chain) in proper linear, chronological order. Every block contains a hash of the previous block. The blockchain has complete information about different user addresses and their balances right from the genesis block to the most recently completed block. Every node on the blockchain has a copy of the ledger with themselves, that gets synced after creation of a new block.</p>\n<h2>The ‘what’ block ?</h2>\n<p>Every blockchain has to start somewhere, so there’s what’s called a <strong>genesis block</strong> at the beginning. This is the first block, and there, at the beginning, the creators of Ethereum (or any other cryptocurrency) were at liberty to say “<em>To start, the following accounts all have X units of my cryptocurrency.</em>” Any transfer of data on the blockchain will have originated from one of these initial accounts (or from mining).</p>\n<p>The blockchain was designed so these transactions are immutable, meaning they cannot be deleted. The blocks are added through cryptography (more, later), ensuring that they remain meddle-proof: The data can be distributed, but not copied (a node never knows exactly what’s in these transactions). You can always see a block yourself by using a Blockchain Explorer.</p>\n<h2>Privacy – how?</h2>\n<p>The blockchain isn’t just a bunch of computers watching that A sent something to B in return for some data; it’s so much more than that! On-chain transactions refer to those cryptocurrency transactions which occur on the blockchain – that is, on the records of the blockchain – and remain dependent on the state of the blockchain for their validity. All such on-chain transactions occur and are considered to be valid only when the blockchain is modified to reflect these transactions on the public ledger records.</p>\n<h2>What the crypto?!</h2>\n<p>So how does <em>cryptography</em> exactly fit in with this blockchain? It’s simple- the nodes lock the data with a  256 bit number (Hash Sum) that represents the data within a block. A different blockchain may use a different hash function, but the basic idea of its integration in the blockchain remains the same (more or less).</p>\n<h3>Hashing Functions</h3>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/hash-db92affcc210c26c957a198c90ea6a7f-150d0.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 520px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 67.6923076923077%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAADSUlEQVQ4y51TWUxTURCdtrSFhLihYMVE8I+Af+ISf1xCmtSFL40YN4KoAdcgIlptAcumaFBQrNXgFhYlIioa18aqpYAtpX1gS9vX0lc2bUAREBJ6nVfpl+KHk5zMzdzlnTlnHkBw8DwQCCJBKBT5c3IyhxACbDCeYq7FksvTaDJ5Ot0J3lRdyAFObAhfGCEI4kfNDAmdEcwXioKDBAuWRcVy2QPRiC2IJMQqmIp9aWs48Jfg83mhmDYjNiBWI5ZMrTcigv64IADgkKk1wxSttVrzUrTarO0uV0GyzXZ2U+BcoAvM3EAtOiySBzAyMgQejwNMJhf8+EEjvgjq6xJwf7adLqAIuUYoSo73lOT7t0sDWJ9VlnQ8xZn/2NucfavHJKvpaTpR2duV97Cnu+BJLcDg4EHo7k6F1ta94PWmwsDAgRDdx0j2i8Z22QWzWabT66WvjcbTWsZdVMnWXxwuW9yZ8+Bw68k7aS0nb6fjw+mfc+rSKVltIkBNTRy0t8eAzRYDL1/GQFtbHLxVh8A0EWh1+hgdJeB2E3A6CVitBCUgPJdzHbvl7itR0bRCiy6/YpjCpv7+86Vs/dWx8gh34VOJWVYrRqZi05kasf3sI3GH/P5SgOFhAno9AZomYLEQmBgnXM071rF5FpvCOzFxhVituWRysoJ4v17sxHpo+bas/UxRI1FnKMdQv5/vM2+MU/LaMYfi0TOAoSEGDIZ2NKUDWZqQoZPT2bmUZfLJnJvY1ibdS1Gy3agjZrnE33ZlC/9zbl0kMhI5FA2ivnMvRKih6H2mKgyguHg+PhYOanU4VFeHg0oVAUcyBGWL4K9zKE/byv23hhbLKIIBiurF1j3Icpjb37ec3bL3lCRgu7vwL0mi6fydDrtC7GfoIVz1MeXcD8dvhj0/dDns9dGr/ly1J38G+A0xGn8bw5oyOEiCPmhYDefYnYW0z1dBTKYz/jn8NlTqYDW8vuNUam/xc58mUzXSkn17tCmrcgxNGqHzGxoBxscJajiGDCfA5foJPh/hGvRr/HNI5VTg/DUbDNI3CJ27u1DJ1lW7pAvtivqNn07dlaDDEuPpqvXossQgvYedOZ0roasrHlnGg9kcjyxXgFYbCv8ZvwC+kcEunw7m2wAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="A basic idea of any hash function."\n        title=""\n        src="/static/hash-db92affcc210c26c957a198c90ea6a7f-150d0.png"\n        srcset="/static/hash-db92affcc210c26c957a198c90ea6a7f-150c9.png 200w,\n/static/hash-db92affcc210c26c957a198c90ea6a7f-366cf.png 400w,\n/static/hash-db92affcc210c26c957a198c90ea6a7f-150d0.png 520w"\n        sizes="(max-width: 520px) 100vw, 520px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p align=\'center\'> <a href="https://en.wikibooks.org/wiki/File:Hash_function.svg">source</a></p>\n<p>If you look closely, you’ll notice even a slight change (even just 1 bit) in the data would create a different hash sum altogether. <strong><em>There is simply no pattern at all!</em></strong></p>\n<p>So here comes the answer to a question that might’ve struck you-</p>\n<blockquote>\n<p>Why would anyone waste her/his own electricity and compute power to validate my transactions? Social service? Repentance out of guilt?</p>\n</blockquote>\n<p>It’s MONEY!</p>\n<p>There are nodes, there are traders, then there are MINERS.</p>\n<p>Miners are a subset of nodes as all miners must be running a full node (ie they must have complete ledger with themselves) in order to mine (at least to mine properly). The nodes are what determine consensus as <strong>all nodes must agree to the same rules otherwise the nodes will fork off of the network.</strong></p>\n<p align=\'center\'>Continue Reading</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Blockchain is a vast, "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"global distributed ledger"}]},{type:"text",value:" or database running on millions of devices and open to anyone, where not just information but anything of "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"value"}]},{type:"text",value:" — money, but also titles, deeds, identities, even votes — can be moved, stored and managed securely and privately. Trust is established through mass collaboration and clever code rather than by powerful intermediaries like governments and banks."},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\n–Wikinomics"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"So I’ve been reading all about blockchains (even those 12 point font research papers!). This is a rough gist of what I learnt:-"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"A distributed ledger"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Wikipedia "},{type:"element",tagName:"a",properties:{href:"https://en.wikipedia.org/wiki/Distributed_ledger"},children:[{type:"text",value:"explains"}]},{type:"text",value:" thus –"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"“A distributed ledger is a consensus of replicated, shared, and synchronised digital data geographically spread across multiple sites, countries, or institutions. There is no central administrator or centralised data storage.”"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This seems too much condensed. Let me break it down for you."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"There is no central authority."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Every transaction here occurs in front of an array of guards that maintain order and make sure the transactions are completed in full by both parties."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"These guards are just some computers that have volunteered to become a ‘node’. Only these nodes can validate the transactions of every user on a blockchain."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Before we go any further, I need to tell you what a transaction means in this context."}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"A transaction occurs when there is an exchange of data between any two parties. It need not be money only. It can be any data, you can even make a deal involving official papers of properties through some blockchain implementing platform!"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"And if this sounds scary, don’t worry; no-one, not even those nodes (the ones which supervise the transactions) know what exactly you exchanged! Kudos to privacy! And that’s not even half of it! I’ll explain more later.\n\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/explain1-4b86149016fc1278353a29434f0739d3-71f92.jpg",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 740px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url('data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAADwAwCdASoUAAoAPm0qkkWkIqGYBABABsSygFp0xeFjKPuYZbMOfsAAAP7zStKzoY6/ZxMizcxRD0vN4XCCD8x0EmWHXWBZ7noe2rLUQ5Hcn6XrZUqb+B1JRgQWzxop9pZF52CAu1P2leAoAXQAAA=='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"conventional central authority",title:"",src:"/static/explain1-4b86149016fc1278353a29434f0739d3-71f92.jpg",srcSet:["/static/explain1-4b86149016fc1278353a29434f0739d3-bae36.jpg 200w","/static/explain1-4b86149016fc1278353a29434f0739d3-845a6.jpg 400w","/static/explain1-4b86149016fc1278353a29434f0739d3-71f92.jpg 740w"],sizes:["(max-width:","740px)","100vw,","740px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    \nConsider the conventional case of a bank (a conventional central authority)."}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"NOTE : We are using ‘bank’ as an example just because it comprises a good amount of ‘transactions’. Always remember that these ‘transactions’ can be of data or goods too!"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"So here, in a bank, all the transactions occurring between accounts would be verified by a single, central authority, and all your possessions currently with the bank would be at the mercy of the whims of the bank, the "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"single point of security"}]},{type:"text",value:" in the transaction. If, by any chance, the bank burns down (physical damage to central authority) or gets robbed (or hacked), or seizes your account (unethically or otherwise) , there would be consequences, the likes of which you most probably won’t be comfortable with."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Enter blockchain with the power of consensus based distributed ledger! If we consider the case of bitcoin blockchain, there are about 7000 nodes in the network that all work for the security of all those precious bitcoins that keep soaring and falling by the minute. For bitcoin to fail, all these 7000 points of security would have to be attacked at the same time, or at-least half of them. Not only that, with the sky-high pricing of these virtual currencies, more and more people are opting in to become nodes, which adds to security of the users(traders) making transactions over bitcoin blockchain. "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"So that’s security for you and the ‘things’ you love!"}]},{type:"text",value:" If you wish to know more about blockchain that deals with data, check out ethereum. Ethereum is an open-source, public, blockchain-based distributed computing platform and operating system featuring smart contract functionality."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Block"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"A block is the ‘current’ part of a blockchain, which records some or all of the recent transactions. Once completed, a block goes into the blockchain as a permanent database. Each time a block gets completed, a new one is generated. There are countless such blocks in the blockchain, connected to each other (like links in a chain) in proper linear, chronological order. Every block contains a hash of the previous block. The blockchain has complete information about different user addresses and their balances right from the genesis block to the most recently completed block. Every node on the blockchain has a copy of the ledger with themselves, that gets synced after creation of a new block."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"The ‘what’ block ?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Every blockchain has to start somewhere, so there’s what’s called a "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"genesis block"}]},{type:"text",value:" at the beginning. This is the first block, and there, at the beginning, the creators of Ethereum (or any other cryptocurrency) were at liberty to say “"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"To start, the following accounts all have X units of my cryptocurrency."}]},{type:"text",value:"” Any transfer of data on the blockchain will have originated from one of these initial accounts (or from mining)."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The blockchain was designed so these transactions are immutable, meaning they cannot be deleted. The blocks are added through cryptography (more, later), ensuring that they remain meddle-proof: The data can be distributed, but not copied (a node never knows exactly what’s in these transactions). You can always see a block yourself by using a Blockchain Explorer."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Privacy – how?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The blockchain isn’t just a bunch of computers watching that A sent something to B in return for some data; it’s so much more than that! On-chain transactions refer to those cryptocurrency transactions which occur on the blockchain – that is, on the records of the blockchain – and remain dependent on the state of the blockchain for their validity. All such on-chain transactions occur and are considered to be valid only when the blockchain is modified to reflect these transactions on the public ledger records."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"What the crypto?!"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"So how does "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"cryptography"}]},{type:"text",value:" exactly fit in with this blockchain? It’s simple- the nodes lock the data with a  256 bit number (Hash Sum) that represents the data within a block. A different blockchain may use a different hash function, but the basic idea of its integration in the blockchain remains the same (more or less)."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Hashing Functions"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/hash-db92affcc210c26c957a198c90ea6a7f-150d0.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 520px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 67.6923076923077%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAADSUlEQVQ4y51TWUxTURCdtrSFhLihYMVE8I+Af+ISf1xCmtSFL40YN4KoAdcgIlptAcumaFBQrNXgFhYlIioa18aqpYAtpX1gS9vX0lc2bUAREBJ6nVfpl+KHk5zMzdzlnTlnHkBw8DwQCCJBKBT5c3IyhxACbDCeYq7FksvTaDJ5Ot0J3lRdyAFObAhfGCEI4kfNDAmdEcwXioKDBAuWRcVy2QPRiC2IJMQqmIp9aWs48Jfg83mhmDYjNiBWI5ZMrTcigv64IADgkKk1wxSttVrzUrTarO0uV0GyzXZ2U+BcoAvM3EAtOiySBzAyMgQejwNMJhf8+EEjvgjq6xJwf7adLqAIuUYoSo73lOT7t0sDWJ9VlnQ8xZn/2NucfavHJKvpaTpR2duV97Cnu+BJLcDg4EHo7k6F1ta94PWmwsDAgRDdx0j2i8Z22QWzWabT66WvjcbTWsZdVMnWXxwuW9yZ8+Bw68k7aS0nb6fjw+mfc+rSKVltIkBNTRy0t8eAzRYDL1/GQFtbHLxVh8A0EWh1+hgdJeB2E3A6CVitBCUgPJdzHbvl7itR0bRCiy6/YpjCpv7+86Vs/dWx8gh34VOJWVYrRqZi05kasf3sI3GH/P5SgOFhAno9AZomYLEQmBgnXM071rF5FpvCOzFxhVituWRysoJ4v17sxHpo+bas/UxRI1FnKMdQv5/vM2+MU/LaMYfi0TOAoSEGDIZ2NKUDWZqQoZPT2bmUZfLJnJvY1ibdS1Gy3agjZrnE33ZlC/9zbl0kMhI5FA2ivnMvRKih6H2mKgyguHg+PhYOanU4VFeHg0oVAUcyBGWL4K9zKE/byv23hhbLKIIBiurF1j3Icpjb37ec3bL3lCRgu7vwL0mi6fydDrtC7GfoIVz1MeXcD8dvhj0/dDns9dGr/ly1J38G+A0xGn8bw5oyOEiCPmhYDefYnYW0z1dBTKYz/jn8NlTqYDW8vuNUam/xc58mUzXSkn17tCmrcgxNGqHzGxoBxscJajiGDCfA5foJPh/hGvRr/HNI5VTg/DUbDNI3CJ27u1DJ1lW7pAvtivqNn07dlaDDEuPpqvXossQgvYedOZ0roasrHlnGg9kcjyxXgFYbCv8ZvwC+kcEunw7m2wAAAABJRU5ErkJggg=='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"A basic idea of any hash function.",title:"",src:"/static/hash-db92affcc210c26c957a198c90ea6a7f-150d0.png",srcSet:["/static/hash-db92affcc210c26c957a198c90ea6a7f-150c9.png 200w","/static/hash-db92affcc210c26c957a198c90ea6a7f-366cf.png 400w","/static/hash-db92affcc210c26c957a198c90ea6a7f-150d0.png 520w"],sizes:["(max-width:","520px)","100vw,","520px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:" "},{type:"element",tagName:"a",properties:{href:"https://en.wikibooks.org/wiki/File:Hash_function.svg"},children:[{type:"text",value:"source"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If you look closely, you’ll notice even a slight change (even just 1 bit) in the data would create a different hash sum altogether. "},{type:"element",tagName:"strong",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"There is simply no pattern at all!"}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"So here comes the answer to a question that might’ve struck you-"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Why would anyone waste her/his own electricity and compute power to validate my transactions? Social service? Repentance out of guilt?"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"It’s MONEY!"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"There are nodes, there are traders, then there are MINERS."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Miners are a subset of nodes as all miners must be running a full node (ie they must have complete ledger with themselves) in order to mine (at least to mine properly). The nodes are what determine consensus as "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"all nodes must agree to the same rules otherwise the nodes will fork off of the network."}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{align:"center"},children:[{type:"text",value:"Continue Reading"}]}],data:{quirksMode:!1}},fields:{slug:"/my_blockchain/",prefix:"2018-07-17"},frontmatter:{title:"My Testimony about Blockchain - Part 1",subTitle:"from Genesis block to blockchain and everything in between!",cover:{childImageSharp:{resize:{src:"/static/cover-0a42be4ad5d5b398e3ac890bbc3f6baf-ada8c.jpg"}}}}},author:{id:"/home/brute4s99/DEV/repos/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Piyush Aggarwal</strong> wrote this article. He expects you to comment your thoughts below.\nLet them reach him!</p>"},footnote:{id:"/home/brute4s99/DEV/repos/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>based on a GatsbyJS starter by <a href="https://github.com/greglobinski">Greg Lobinski</a> |\nModded on Arch 🐧 Linux with 💙 by <a href="https://github.com/brute4s99">Piyush Aggarwal</a> |\nGatsbyJS, ReactJs, CSS inside!</li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"201681520611805"}}}},pathContext:{slug:"/my_blockchain/"}}}});
//# sourceMappingURL=path---my-blockchain-9d3b4c2e465f4a6d6b8e.js.map