cusomreact={
    type:'a',

    props:{
        href:"https://google.com",
        target:"_blank",
    },
    child: "Link to google",


}
const el=document.getElementById("root");
const domel=document.createElement(cusomreact.type);

domel.setAttribute('href',cusomreact.props.href);
domel.setAttribute('target',cusomreact.props.target);
domel.innerHTML=cusomreact.child;
el.append(domel);
