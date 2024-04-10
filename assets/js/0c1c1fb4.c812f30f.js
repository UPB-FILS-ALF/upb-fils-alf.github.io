"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6916],{5244:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var i=s(7624),r=s(2172);const l={sidebar_position:2,description:"Cr\xe9ation de l\u2019AST"},t="02 - Analyse syntaxique",d={id:"devoir/02",title:"02 - Analyse syntaxique",description:"Cr\xe9ation de l\u2019AST",source:"@site/docs/devoir/02.md",sourceDirName:"devoir",slug:"/devoir/02",permalink:"/docs/devoir/02",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-alf/upb-fils-alf.github.io/edit/main/docs/devoir/02.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Cr\xe9ation de l\u2019AST"},sidebar:"tutorialSidebar",previous:{title:"01 - Simulateur",permalink:"/docs/devoir/01"},next:{title:"Analyse s\xe9mantique",permalink:"/docs/devoir/03"}},a={},c=[{value:"Informations",id:"informations",level:2},{value:"Demandes",id:"demandes",level:2},{value:"Syntaxe du langage ALF",id:"syntaxe-du-langage-alf",level:2},{value:"Notations",id:"notations",level:3},{value:"Commentaires",id:"commentaires",level:3},{value:"Types de donn\xe9es",id:"types-de-donn\xe9es",level:3},{value:"Valeurs",id:"valeurs",level:3},{value:"Expressions",id:"expressions",level:3},{value:"D\xe9clarations des variables",id:"d\xe9clarations-des-variables",level:3},{value:"D\xe9finitions des classes",id:"d\xe9finitions-des-classes",level:3},{value:"Acc\xe8s aux propri\xe9t\xe9s d&#39;une classe",id:"acc\xe8s-aux-propri\xe9t\xe9s-dune-classe",level:3},{value:"D\xe9finitions des listes",id:"d\xe9finitions-des-listes",level:3},{value:"Acc\xe8s aux \xe9l\xe9ments d\u2019une liste",id:"acc\xe8s-aux-\xe9l\xe9ments-dune-liste",level:3},{value:"Affectations",id:"affectations",level:3},{value:"D\xe9finitions des fonctions",id:"d\xe9finitions-des-fonctions",level:3},{value:"L\u2019instruction return",id:"linstruction-return",level:3},{value:"Appel des fonctions",id:"appel-des-fonctions",level:3},{value:"Branches",id:"branches",level:3},{value:"Boucles",id:"boucles",level:3},{value:"While",id:"while",level:4},{value:"Repeat",id:"repeat",level:4},{value:"For",id:"for",level:4},{value:"For iteration",id:"for-iteration",level:4},{value:"Exemple de repr\xe9sentation JSON",id:"exemple-de-repr\xe9sentation-json",level:2},{value:"Bonus",id:"bonus",level:2},{value:"Conseils d&#39;implantation",id:"conseils-dimplantation",level:2},{value:"Questions",id:"questions",level:2}];function o(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"02---analyse-syntaxique",children:"02 - Analyse syntaxique"}),"\n",(0,i.jsx)(n.h2,{id:"informations",children:"Informations"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Deadline: le 25 avril, 23:59 ",(0,i.jsx)(n.br,{}),"\n","Points: 2 points de la note finale ",(0,i.jsx)(n.br,{}),"\n","Lien: ",(0,i.jsx)(n.a,{href:"https://classroom.github.com/a/A5xk-pKC",children:"https://classroom.github.com/a/A5xk-pKC"})," ",(0,i.jsx)(n.br,{}),"\n","T\xe9l\xe9chargement tardif: ",(0,i.jsx)(n.strong,{children:"0.5p/jour"})," (maximum 4 jours)"]})}),"\n",(0,i.jsx)(n.h2,{id:"demandes",children:"Demandes"}),"\n",(0,i.jsx)(n.p,{children:"Analysez le fichier avec du code source dans le langage ALF et g\xe9n\xe9rez un arbre abstrait de syntaxe (AST). Utilisez un Visiteur pour r\xe9aliser une repr\xe9sentation \xe0 partir des classes de la biblioth\xe8que de compilateur. Ensuite, affichez l'arbre obtenu sous la forme d'un JSON."}),"\n",(0,i.jsx)(n.p,{children:"Vous recevrez le nom du fichier de la ligne de commande."}),"\n",(0,i.jsx)(n.h2,{id:"syntaxe-du-langage-alf",children:"Syntaxe du langage ALF"}),"\n",(0,i.jsx)(n.p,{children:"Le langage Alf est un langage typ\xe9 qui contient les instructions suivantes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"d\xe9finitions des variables"}),"\n",(0,i.jsx)(n.li,{children:"d\xe9finitions des fonctions"}),"\n",(0,i.jsx)(n.li,{children:"d\xe9finitions des classes (en tant que nouveau type de donn\xe9es)"}),"\n",(0,i.jsx)(n.li,{children:"d\xe9finitions des listes (en tant que nouveau type de donn\xe9es)"}),"\n",(0,i.jsx)(n.li,{children:"expressions"}),"\n",(0,i.jsx)(n.li,{children:"attributions"}),"\n",(0,i.jsx)(n.li,{children:"appels des fonctions"}),"\n",(0,i.jsxs)(n.li,{children:["branches (des instructions ",(0,i.jsx)(n.code,{children:"if"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["boucles (",(0,i.jsx)(n.code,{children:"while"}),", ",(0,i.jsx)(n.code,{children:"for"}),", ",(0,i.jsx)(n.code,{children:"repeat"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Les instructions sont s\xe9par\xe9es par ",(0,i.jsx)(n.code,{children:";"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"notations",children:"Notations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[facultatif]:  ce qui se trouve entre ",(0,i.jsx)(n.code,{children:"[]"})," est une partie optionnelle de l'instruction"]}),"\n",(0,i.jsxs)(n.li,{children:["<nom> : ce qui se trouve entre ",(0,i.jsx)(n.code,{children:"<>"})," est seulement un mod\xe8le"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"commentaires",children:"Commentaires"}),"\n",(0,i.jsxs)(n.p,{children:["Les commentaires font partie du fichier source et ils sont ignor\xe9s. Ils sont encadr\xe9s par ",(0,i.jsx)(n.code,{children:"/*"})," et ",(0,i.jsx)(n.code,{children:"*/"})," et ne sont pas imbriqu\xe9s. Ils peuvent s'\xe9tendre sur plusieurs lignes."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Tous les fichiers de test ont un commentaire sur la premi\xe8re ligne. Si votre grammaire n'a pas de r\xe8gles pour les commentaires, vous pouvez tout simplement ignorer la premi\xe8re ligne."})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"/* Ceci est un texte pour d\xe9crire le script */\ndeclare integer v = 5;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"types-de-donn\xe9es",children:"Types de donn\xe9es"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Nom du type"}),(0,i.jsx)(n.th,{children:"Signification"}),(0,i.jsx)(n.th,{children:"Exemple d'une valeur"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"integer"})}),(0,i.jsx)(n.td,{children:"nombre entier"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"7"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"float"})}),(0,i.jsx)(n.td,{children:"nombre r\xe9el"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"7.5"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"char"})}),(0,i.jsx)(n.td,{children:"caract\xe8re"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"'a'"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"cha\xeene"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"ceci est une texte"'})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:"valeur logique"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]})]})]}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["Pour les valeurs et les variables avec les types ",(0,i.jsx)(n.code,{children:"integer"})," et ",(0,i.jsx)(n.code,{children:"float"}),", on vous demande d\u2019utiliser ",(0,i.jsx)(n.code,{children:"I64"})," et ",(0,i.jsx)(n.code,{children:"F64"})," pour les noms des types. Par exemple, pour le code suivant:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"45;\n"})}),(0,i.jsx)(n.p,{children:"la sortie sera:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  "@type" : "Module",\n  "block" : {\n    "@type" : "Block",\n    "statements" : [ {\n      "@type" : "Value",\n      "value" : "45",\n      "typeName" : "I64",\n      "line" : 1\n    } ],\n    "line" : 1,\n    "scope" : {\n      "@type" : "SymbolTable",\n      "variables" : { },\n      "types" : { },\n      "functions" : { }\n    }\n  },\n  "line" : 1,\n  "scope" : null\n}\n'})})]}),"\n",(0,i.jsx)(n.h3,{id:"valeurs",children:"Valeurs"}),"\n",(0,i.jsx)(n.p,{children:"Syntaxe:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"<valeur>;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Exemples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'5;\n"string";\ntrue;\n'})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"Les cha\xeenes peuvent avoir les caract\xe8res sp\xe9ciaux suivants:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u201d - not\xe9e \\\u201d"}),"\n",(0,i.jsx)(n.li,{children:"\\ - not\xe9 \\"}),"\n",(0,i.jsx)(n.li,{children:"\\r - not\xe9 \\r"}),"\n",(0,i.jsx)(n.li,{children:"\\n - not\xe9 \\n"}),"\n"]})]}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsx)(n.p,{children:"Notre langage peut aussi contenir la valeur vide:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"emtpy;\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"expressions",children:"Expressions"}),"\n",(0,i.jsx)(n.p,{children:"Priorit\xe9 des op\xe9rateurs"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Op\xe9rateur"}),(0,i.jsx)(n.th,{children:"Priorit\xe9"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"*"}),", ",(0,i.jsx)(n.code,{children:"/"}),", ",(0,i.jsx)(n.code,{children:"mod"})]}),(0,i.jsx)(n.td,{children:"Haute"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"+"}),", ",(0,i.jsx)(n.code,{children:"-"})]}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"not"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"and"}),", ",(0,i.jsx)(n.code,{children:"or"}),", ",(0,i.jsx)(n.code,{children:"xor"})]}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:">"}),", ",(0,i.jsx)(n.code,{children:">="}),", ",(0,i.jsx)(n.code,{children:"<"}),", ",(0,i.jsx)(n.code,{children:"<="})]}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"="}),", ",(0,i.jsx)(n.code,{children:"!="})]}),(0,i.jsx)(n.td,{children:"Bas"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Exemples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"2+5;\n2*4+5;\nvariable+5;\n2+(x+y)*(exec func());\n!true;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"d\xe9clarations-des-variables",children:"D\xe9clarations des variables"}),"\n",(0,i.jsx)(n.p,{children:"Syntaxe:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"   declare [type_de_la_variable_1] <nom_de_la_variable_1> [ = <expr\xe9ssion_1>] [, [type_de_la_variable_2] <nom_de_la_variable_2> [ = <expr\xe9ssion_2>], ... ]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Exemples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'    declare a;\n    declare integer b;\n    declare boolean c = false;\n    declare integer d = 7, string e = "texte", float f = 3.14;\n'})}),"\n",(0,i.jsx)(n.p,{children:"Les noms des variables sont des cha\xeenes qui commencent par  une lettre ou _ et peuvent contenir d\u2019autres lettres ou des chiffres."}),"\n",(0,i.jsx)(n.p,{children:"Exemples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"    var13\n    variable\n    _nomVar12\n    _a\n"})}),"\n",(0,i.jsx)(n.h3,{id:"d\xe9finitions-des-classes",children:"D\xe9finitions des classes"}),"\n",(0,i.jsx)(n.p,{children:"Syntaxe:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"class <nom_de_la_classe>\n    [local <property_type> <property_name> [= <valeur_initiale>]]\n    ...\n    ...\nend;    \n"})}),"\n",(0,i.jsx)(n.p,{children:"Exemple:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"class person\n    local string name;\n    local integer age = 20;\nend;    \n"})}),"\n",(0,i.jsx)(n.h3,{id:"acc\xe8s-aux-propri\xe9t\xe9s-dune-classe",children:"Acc\xe8s aux propri\xe9t\xe9s d'une classe"}),"\n",(0,i.jsx)(n.p,{children:"Syntaxe:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"<nom_du_objet>.<nom_de_la_propri\xe9t\xe9>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Exemple:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'p.name = "Un autre nom";\n'})}),"\n",(0,i.jsx)(n.h3,{id:"d\xe9finitions-des-listes",children:"D\xe9finitions des listes"}),"\n",(0,i.jsx)(n.p,{children:"De la m\xeame mani\xe8re comme pour les classe, d\xe9finir une liste en fait d\xe9fini un nouveau type des donn\xe9es. Pour l\u2019utiliser, il faut d\xe9clarer une variable de ce nouveau type (avec la syntaxe normale pour la d\xe9claration des variables)."}),"\n",(0,i.jsx)(n.p,{children:"Syntaxe:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"//note: dans ce cas, [] sont des parenth\xe8ses r\xe9elles et sont obligatoires\n<nom_du_type_des_donn\xe9es> array <nom_du_type_de_liste>[<from>:<to>];\n"})}),"\n",(0,i.jsx)(n.p,{children:"Exemple:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"integer array exemple[1:9];\n"})}),"\n",(0,i.jsx)(n.h3,{id:"acc\xe8s-aux-\xe9l\xe9ments-dune-liste",children:"Acc\xe8s aux \xe9l\xe9ments d\u2019une liste"}),"\n",(0,i.jsx)(n.p,{children:"Syntaxe:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"//note: dans ce cas, [] sont des parenth\xe8ses r\xe9elles et sont obligatoires\n<nom_de_la_variable_liste>[<index>]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Exemple:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'v[5] = "New value inside the array";\n'})}),"\n",(0,i.jsx)(n.h3,{id:"affectations",children:"Affectations"}),"\n",(0,i.jsx)(n.p,{children:"Syntaxe:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"<variable> = <expression>;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Exemples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'var2 = 2*4+5;\nobj.classfield = true;\nv[5] = "New value inside the array";\n'})}),"\n",(0,i.jsx)(n.h3,{id:"d\xe9finitions-des-fonctions",children:"D\xe9finitions des fonctions"}),"\n",(0,i.jsx)(n.p,{children:"Syntaxe:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function <nom_de_la_fonction>[([<type_param\xe8tre_1> <nom_param\xe8tre_1>[, <type_param\xe8tre_2> <nom_param\xe8tre_2>, ...]])] : <return_type> [=><expression>]\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function <nom_de_la_fonction>[([<type_param\xe8tre_1> <nom_param\xe8tre_1>[, <type_param\xe8tre_2> <nom_param\xe8tre_2>, ...]])] : <return_type>\nbegin\n    <instructions>\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"Exemples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'function sample(float f1, float f2): integer;\n\nfunction returns : string => "Fonction sans param\xe8tres";\n\nfunction withbody(integer i1, integer i2): integer\nbegin\n    s = i1 + i2;\nend\n'})}),"\n",(0,i.jsx)(n.h3,{id:"linstruction-return",children:"L\u2019instruction return"}),"\n",(0,i.jsx)(n.p,{children:"Syntaxe:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"return <expression>;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Exemples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"return s;\n\nreturn 2*3+1;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"appel-des-fonctions",children:"Appel des fonctions"}),"\n",(0,i.jsx)(n.p,{children:"Syntaxe"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"exec <nom_de_la_fonction>(<valeur_param\xe8tre_1>, <valeur_param\xe8tre_2>, ...);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Exemples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'exec write("Text");\ns = exec _sum(2, 5);\nexec getdir();\n'})}),"\n",(0,i.jsx)(n.h3,{id:"branches",children:"Branches"}),"\n",(0,i.jsx)(n.p,{children:"Syntaxe"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"if <expression>\n<instructions>\nend;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"if <expression>\n<instructions>\nelse\n<instructions>\nend;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Exemples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"if var1 > 2\n    exec function1(s);\nelse\n    s = s + 9;  \nend;  \n"})}),"\n",(0,i.jsx)(n.h3,{id:"boucles",children:"Boucles"}),"\n",(0,i.jsx)(n.h4,{id:"while",children:"While"}),"\n",(0,i.jsx)(n.p,{children:"Syntaxe"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"while <expression> start\n<instructions>\nfinish;\n"})}),"\n",(0,i.jsx)(n.h4,{id:"repeat",children:"Repeat"}),"\n",(0,i.jsx)(n.p,{children:"Syntaxe"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"repeat \n<instructions>\nwhile <expression>;\n"})}),"\n",(0,i.jsx)(n.h4,{id:"for",children:"For"}),"\n",(0,i.jsx)(n.p,{children:"Syntaxe"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"for <nom_de_variable> from <expression> to <expression> start\n<instructions>\nend;\n"})}),"\n",(0,i.jsx)(n.h4,{id:"for-iteration",children:"For iteration"}),"\n",(0,i.jsx)(n.p,{children:"Syntaxe"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"for <nom_de_variable> in <nom_de_variable> start\n<instructions>\nend;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"exemple-de-repr\xe9sentation-json",children:"Exemple de repr\xe9sentation JSON"}),"\n",(0,i.jsx)(n.p,{children:"Pour afficher le r\xe9sultat sous la forme d\u2019un JSON, on va utiliser une instance de ObjectMapper de la mani\xe8re suivante:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"import com.fasterxml.jackson.databind.ObjectMapper\n\nfun main(){\n  val serializer = ObjectMapper().writerWithDefaultPrettyPrinter()\n  val module: Module = ...\n  //votre code ici\n\n  //pour obtenir le JSON comme String (pour pouvoir l\u2019\xe9crire dans un fichier):\n  val jsonModule : String = serializer.writeValueAsString(module) \n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Pour le programme suivant:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"showLineNumbers",children:"/* Variable value Attribution */\n\ndeclare integer n;\n\nn = 6;\n"})}),"\n",(0,i.jsx)(n.p,{children:"La sortie dans le format JSON sera:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  "@type" : "Module",\n  "block" : {\n    "@type" : "Block",\n    "statements" : [ {\n      "@type" : "Group",\n      "declarations" : [ {\n        "@type" : "VariableDefinition",\n        "variable" : {\n          "@type" : "Identifier",\n          "title" : "n",\n          "typeName" : "I64",\n          "line" : 3\n        },\n        "init" : null,\n        "line" : 3\n      } ],\n      "line" : 3\n    }, {\n      "@type" : "Assignment",\n      "to" : {\n        "@type" : "Identifier",\n        "title" : "n",\n        "typeName" : null,\n        "line" : 5\n      },\n      "from" : {\n        "@type" : "Value",\n        "value" : "6",\n        "typeName" : "I64",\n        "line" : 5\n      },\n      "line" : 5\n    } ],\n    "line" : 3,\n    "scope" : {\n      "@type" : "SymbolTable",\n      "variables" : { },\n      "types" : { }\n    }\n  },\n  "line" : 3,\n  "scope" : null\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Vous pouvez aussi regarder les testes ",(0,i.jsx)(n.a,{href:"https://github.com/UPB-FILS-ALF/devoir-3-tests/tree/Updated2024",children:"ici"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"bonus",children:"Bonus"}),"\n",(0,i.jsxs)(n.p,{children:["Implantez une fonctionalit\xe9 pour traiter les ",(0,i.jsx)(n.strong,{children:"erreurs"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Si le fichier source contient des erreurs, vous devez g\xe9n\xe9rer un JSON avec elles. Il y a deux types d'erreurs:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"lexicales (j\xe9ton pas reconnu)"}),"\n",(0,i.jsx)(n.li,{children:"syntaxe (j\xe9ton inattendu)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Au lieu d\u2019afficher l\u2019AST pour le code re\xe7u, vous devez afficher une liste contenant toutes les erreurs, ordon\xe9es en fonction de la ligne sur laquelle elles se trouvent."}),"\n",(0,i.jsx)(n.p,{children:"Pour le code suivant:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"showLineNumbers",children:"\ndeclare variable < integer;\n"})}),"\n",(0,i.jsx)(n.p,{children:"La sortie sera:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'[ {\n  "id" : "Syntax Error",\n  "line" : 2,\n  "charPosition" : 17,\n  "msg" : "no viable alternative at input \'variable<\'"\n} ]\n'})}),"\n",(0,i.jsx)(n.h2,{id:"conseils-dimplantation",children:"Conseils d'implantation"}),"\n",(0,i.jsx)(n.p,{children:"Pour chaque instruction possible du langage, on vous conseil de suivre les \xe9tapes suivantes:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\xc9crivez les r\xe8gles de la grammaire pour l\u2019instruction."}),"\n",(0,i.jsx)(n.li,{children:"Implantez les fonctions du visiteur pour l\u2019instruction."}),"\n",(0,i.jsxs)(n.li,{children:["Testez votre implantation. Vous pouvez utiliser les donn\xe9es dans ",(0,i.jsx)(n.a,{href:"https://github.com/UPB-FILS-ALF/devoir-3-tests/tree/Updated2024",children:"les testes"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"questions",children:"Questions"}),"\n",(0,i.jsxs)(n.p,{children:["Si vous avez des questions concernant les devoirs, posez-les en publiant un probl\xe8me sur le ",(0,i.jsx)(n.a,{href:"https://github.com/UPB-FILS-ALF/questions",children:"github repository pour les questions"})," avec le format du titre ",(0,i.jsx)(n.code,{children:"[syntaxique]<titre de votre question>"}),". Vous aurez besoin d'un compte github pour cela."]}),"\n",(0,i.jsx)(n.admonition,{title:"Attention",type:"danger",children:(0,i.jsx)(n.p,{children:"Ne postez pas de code. Cette action est consid\xe9r\xe9 comme tentative de tricher et alors vous obtiendrez 0p pour le devoir."})}),"\n",(0,i.jsxs)(n.p,{children:["Si vous souhaitez recevoir un e-mail lorsque des probl\xe8mes sont publi\xe9s ou lorsqu'il y a de nouveaux messages, acc\xe9dez au ",(0,i.jsx)(n.a,{href:"https://github.com/UPB-FILS-ALF/questions",children:"repository pour les questions"})," et cliquez sur Regarder."]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},2172:(e,n,s)=>{s.d(n,{I:()=>d,M:()=>t});var i=s(1504);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);