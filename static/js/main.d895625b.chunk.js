(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{137:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return O}));var r=n(1),c=n.n(r),a=n(4),i=n(33),s=n(66),o=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),l=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),d=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,s,o,u,l,d=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=d.length>3&&void 0!==d[3]?d[3]:"recent",s=d.length>4&&void 0!==d[4]&&d[4],o=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(d,b){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),b({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){o=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),b(u)):(console.log("Resolved via websocket",e),d(u))}),i)}catch(f){o=!0,console.error("WS error in setup",t,f)}case 2:if(o||!s){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],o||(u?u.err?(console.log("REST error for",t,u),o=!0,b(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),o=!0,d(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,h(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),o=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),b=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:s.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},f=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,s,u,l,d,b,f,p,j;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(o,a);case 3:return s=e.sent,u=new i.a(s,o,a),l={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return d=e.sent,b=d.data.itemsAvailable.toNumber(),f=d.itemsRedeemed.toNumber(),p=b-f,j=d.data.goLiveDate.toNumber(),j=new Date(1e3*j),console.log({itemsAvailable:b,itemsRedeemed:f,itemsRemaining:p,goLiveDate:j}),e.abrupt("return",{candyMachine:l,itemsAvailable:b,itemsRedeemed:f,itemsRemaining:p,goLiveDate:j});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer(),e.from("edition")],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer()],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),s.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var o,u,d,f,x,O,h;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=i.d.Keypair.generate(),e.next=3,m(r,o.publicKey);case 3:return u=e.sent,d=t.connection,f=t.program,e.next=7,j(o.publicKey);case 7:return x=e.sent,e.next=10,p(o.publicKey);case 10:return O=e.sent,e.next=13,d.getMinimumBalanceForRentExemption(s.a.span);case 13:return h=e.sent,e.next=16,f.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:o.publicKey,metadata:x,masterEdition:O,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:l,tokenProgram:s.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[o],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:o.publicKey,space:s.a.span,lamports:h,programId:s.b}),s.c.createInitMintInstruction(s.b,o.publicKey,0,r,r),b(u,r,r,o.publicKey),s.c.createMintToInstruction(s.b,o.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},h=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(5).Buffer)},351:function(e,t,n){},352:function(e,t,n){},355:function(e,t){},357:function(e,t){},373:function(e,t){},374:function(e,t){},460:function(e,t){},462:function(e,t){},476:function(e,t){},480:function(e,t){},482:function(e,t){},492:function(e,t){},494:function(e,t){},521:function(e,t){},523:function(e,t){},528:function(e,t){},530:function(e,t){},537:function(e,t){},549:function(e,t){},552:function(e,t){},564:function(e,t){},565:function(e,t,n){"use strict";n.r(t);var r,c,a,i,s=n(2),o=n.n(s),u=n(31),l=n.n(u),d=(n(351),n(352),n(9)),b=n(1),f=n.n(b),p=n(4),j=n(13),m=n(136),x=n(138),O=n(311),h=n(592),y=n(597),g=n(601),v=n(600),S=n(36),k=n(53),w=n(175),T=n(137),P=n(23),N=Object(x.a)(w.a)(r||(r=Object(m.a)([""]))),M=x.a.span(c||(c=Object(m.a)([""]))),R=x.a.div(a||(a=Object(m.a)([""]))),K=Object(x.a)(h.a)(i||(i=Object(m.a)([""]))),B=function(e){var t=e.days,n=e.hours,r=e.minutes,c=e.seconds;e.completed;return Object(P.jsxs)(M,{children:[n+24*(t||0)," hours, ",r," minutes, ",c," seconds"]})},I=function(e){var t=Object(s.useState)(),n=Object(j.a)(t,2),r=(n[0],n[1]),c=Object(s.useState)(!1),a=Object(j.a)(c,2),i=a[0],o=a[1],u=Object(s.useState)(!1),l=Object(j.a)(u,2),b=l[0],m=l[1],x=Object(s.useState)(!1),h=Object(j.a)(x,2),w=h[0],M=h[1],I=Object(s.useState)(0),L=Object(j.a)(I,2),A=L[0],C=L[1],E=Object(s.useState)(0),D=Object(j.a)(E,2),F=D[0],W=D[1],U=Object(s.useState)(0),_=Object(j.a)(U,2),V=(_[0],_[1]),H=Object(s.useState)({open:!1,message:"",severity:void 0}),Y=Object(j.a)(H,2),J=Y[0],Z=Y[1],q=Object(s.useState)(new Date(e.startDate)),X=Object(j.a)(q,2),G=X[0],z=X[1],Q=Object(k.c)(),$=Object(s.useState)(),ee=Object(j.a)($,2),te=ee[0],ne=ee[1],re=function(){Object(p.a)(f.a.mark((function t(){var n,r,c,a,i,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Q){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(T.b)(Q,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,c=n.goLiveDate,a=n.itemsAvailable,i=n.itemsRemaining,s=n.itemsRedeemed,C(a),V(i),W(s),m(0===i),z(c),ne(r);case 16:case"end":return t.stop()}}),t)})))()},ce=function(){var t=Object(p.a)(f.a.mark((function t(){var n,c,a,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,M(!0),!Q||!(null===te||void 0===te?void 0:te.program)){t.next=10;break}return t.next=5,Object(T.c)(te,e.config,Q.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(T.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(c=t.sent)||void 0===c?void 0:c.err)?Z({open:!0,message:"Mint failed! Please try again!",severity:"error"}):Z({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),a=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(a="SOLD OUT!",m(!0)):312===t.t0.code&&(a="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?a="SOLD OUT!":t.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),Z({open:!0,message:a,severity:"error"});case 17:if(t.prev=17,!Q){t.next=23;break}return t.next=21,e.connection.getBalance(Q.publicKey);case 21:i=t.sent,r(i/S.LAMPORTS_PER_SOL);case 23:return M(!1),re(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){Object(p.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!Q){t.next=5;break}return t.next=3,e.connection.getBalance(Q.publicKey);case 3:n=t.sent,r(n/S.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[Q,e.connection]),Object(s.useEffect)(re,[Q,e.candyMachineId,e.connection]),Object(P.jsx)("main",{style:{display:"flex",height:"100vh"},children:Object(P.jsxs)("div",{style:{padding:30,display:"flex",flex:1,flexDirection:"column"},children:[Object(P.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Q&&Object(P.jsxs)("p",{children:["Wallet ",Object(T.d)(Q.publicKey.toBase58()||"")]}),Object(P.jsx)("div",{}),Object(P.jsx)(N,{children:Q?"Connected":"Connet Wallet"})]}),Object(P.jsx)("div",{style:{display:"flex",justifyContent:"center",fontStyle:"bold",justifyItems:"flex-start"},children:" "}),Object(P.jsxs)("section",{id:"services-container",children:[Object(P.jsx)("h1",{className:"h-primary center",style:{color:"white"},children:"Welcome to SplunkMeta NFT's"}),Object(P.jsxs)("div",{id:"services",children:[Object(P.jsxs)("div",{className:"box",children:[Object(P.jsx)("h2",{className:"h-secondary center",children:"SplunkMeta Rare NFT"}),Object(P.jsxs)("p",{className:"center",children:["SplunkMEta Rare NFT's are MINTED only once, only for limited members and These are not for everyone, These NFTs are based on Luck and for selected SOL address,",Object(P.jsx)("a",{href:"https://splunkmeta.github.io/LuckySplunk/",children:"Click here for Lucky MINT"})]})]}),Object(P.jsxs)("div",{className:"box",children:[Object(P.jsx)("h2",{className:"h-secondary center",children:"SplunkMeta Rainbow NFT"}),Object(P.jsx)("p",{className:"center",children:"These NFTs are First Come First Serve Based NFTs. you can MINT using thie MINT Button given Below."})]}),Object(P.jsxs)("div",{className:"box",children:[Object(P.jsx)("h2",{className:"h-secondary center",children:"Splunkmeta Upcoming"}),Object(P.jsx)("p",{className:"center",children:"SplunkMeta still has many NFTs to be Dropped so stay tuned in Discord server for regular updates. Total supply of SplunkMets NFT is 5000."})]})]})]}),Object(P.jsxs)("div",{style:{display:"flex",flex:1,justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(P.jsx)(R,{children:Object(P.jsx)(K,{disabled:b||w||!i,onClick:ce,variant:"contained",children:b?"SOLD OUT":i?w?Object(P.jsx)(y.a,{}):"MINT":Object(P.jsx)(O.a,{date:G,onMount:function(e){return e.completed&&o(!0)},onComplete:function(){return o(!0)},renderer:B})})}),Object(P.jsx)("div",{children:Q&&Object(P.jsxs)("p",{children:[Object(P.jsx)("b",{children:"Supply:"})," ",F,"/",A]})})]}),Object(P.jsx)(g.a,{open:J.open,autoHideDuration:6e3,onClose:function(){return Z(Object(d.a)(Object(d.a)({},J),{},{open:!1}))},children:Object(P.jsx)(v.a,{onClose:function(){return Z(Object(d.a)(Object(d.a)({},J),{},{open:!1}))},severity:J.severity,children:J.message})})]})})},L=n(33),A=n(119),C=n(338),E=n(598),D=new L.d.PublicKey("Cg82sPenJnupyR8emFSTofXN8n7wjecUiG6ypEzVipAZ"),F=new L.d.PublicKey("BNHN5XFyHhmxc8XjSB8tWgqJsktJkAkP9kZ85gXTH4Zu"),W=new L.d.PublicKey("4Z99sQERpa4ER7HSVhcVVw1S553afVWUuVxkPpskKPxT"),U="mainnet-beta",_=new L.d.Connection("https://explorer-api.mainnet-beta.solana.com"),V=parseInt("1636675200",10),H=Object(C.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),Y=function(){var e=Object(s.useMemo)((function(){return Object(S.clusterApiUrl)(U)}),[]),t=Object(s.useMemo)((function(){return[Object(A.a)(),Object(A.b)(),Object(A.c)(),Object(A.e)({network:U}),Object(A.d)({network:U})]}),[]);return Object(P.jsx)(E.a,{theme:H,children:Object(P.jsx)(k.a,{endpoint:e,children:Object(P.jsx)(k.b,{wallets:t,autoConnect:!0,children:Object(P.jsx)(w.b,{children:Object(P.jsx)(I,{candyMachineId:W,config:F,connection:_,startDate:V,treasury:D,txTimeout:3e4})})})})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,602)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};l.a.render(Object(P.jsx)(o.a.StrictMode,{children:Object(P.jsx)(Y,{})}),document.getElementById("root")),J()}},[[565,1,2]]]);
//# sourceMappingURL=main.d895625b.chunk.js.map