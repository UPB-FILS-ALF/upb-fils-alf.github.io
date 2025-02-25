"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1132],{1989:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/06_context_fields-04902a268490c9c22d8c965ab69c9e1b.png"},3070:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=t(4848),s=t(8453);const i={sidebar_position:7,description:"Construire l'arbre d\u2019analyse",slug:"/tp/06"},o="06 - Visitor et Biblioth\xe8que",a={id:"tp/06/index",title:"06 - Visitor et Biblioth\xe8que",description:"Construire l'arbre d\u2019analyse",source:"@site/versioned_docs/version-2024/tp/06/index.md",sourceDirName:"tp/06",slug:"/tp/06",permalink:"/docs/2024/tp/06",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-alf/upb-fils-alf.github.io/edit/main/versioned_docs/version-2024/tp/06/index.md",tags:[],version:"2024",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Construire l'arbre d\u2019analyse",slug:"/tp/06"},sidebar:"tutorialSidebar",previous:{title:"05 - ANTLR Lexer et Analyseur",permalink:"/docs/2024/tp/05"},next:{title:"07 - Analyse s\xe9mantique",permalink:"/docs/2024/tp/07"}},l={},u=[{value:"Visitor",id:"visitor",level:2},{value:"G\xe9n\xe9ration",id:"g\xe9n\xe9ration",level:3},{value:"Implantation",id:"implantation",level:3},{value:"\xc9tiquettes pour les r\xe8gles et les variables",id:"\xe9tiquettes-pour-les-r\xe8gles-et-les-variables",level:3},{value:"Biblioth\xe8que du compilateur",id:"biblioth\xe8que-du-compilateur",level:2},{value:"Combiner les deux",id:"combiner-les-deux",level:2},{value:"Exercices",id:"exercices",level:2},{value:"Bibliographie",id:"bibliographie",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"06---visitor-et-biblioth\xe8que",children:"06 - Visitor et Biblioth\xe8que"}),"\n",(0,r.jsx)(n.p,{children:"Le TP pr\xe9c\xe9dent, on a appris comment utiliser ANTLR pour \xe9crire des grammaires et pour g\xe9n\xe9rer un Lexer et un Analyseur. Ensuite, on a r\xe9ussi de cr\xe9er et acc\xe9der \xe0 l\u2019arbre d\u2019analyse de notre code. On a vu qu\u2019on pouvait voir les r\xe8gles et leurs composantes (les enfants dans l\u2019arbre d\u2019analyse). Ce qui suit, c\u2019est d\u2019utiliser toutes cettes informations dans notre compilateur."}),"\n",(0,r.jsx)(n.p,{children:"Pour continuer avec notre traitement (par exemple, pour faire l\u2019analyse du code du point de vue semantique), il faut parcourir l\u2019arbre d\u2019analyse. Parce qu\u2019il s\u2019agit d\u2019un arbre, on peut le traverser en utilisant DFS (depth-first search/recherche en profondeur) ce qui pourrait \xeatre un processus assez complexe. On discutera une meilleure option pour travailler avec l\u2019arbre d\u2019analyse et on fera une petite introduction dans la biblioth\xe8que de ALF qu\u2019on utilisera \xe0 partir de ce TP."}),"\n",(0,r.jsx)(n.h2,{id:"visitor",children:"Visitor"}),"\n",(0,r.jsx)(n.h3,{id:"g\xe9n\xe9ration",children:"G\xe9n\xe9ration"}),"\n",(0,r.jsx)(n.p,{children:"Au dehors du Lexer et Analyseur, ANTLR a aussi l\u2019option de g\xe9n\xe9rer un Visiteur. Son but est de simplifier le processus de traitement de l\u2019arbre d\u2019analyse. Le Visiteur offre aux programmeurs un moyen de d\xe9finir des fonctions qui s\u2019ex\xe9cutent au moment qu\u2019on arrive \xe0 une certaine r\xe8gle dans notre arbre d\u2019analyse."}),"\n",(0,r.jsx)(n.p,{children:"Prenons l\u2019exemple suivant d\u2019une grammaire simple qui accepte un format similaire aux fichiers XML:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-antlr4",children:"grammar demo;\n\nstart: tag+;\n\ntag: '<' ELEMENT '>' content* '</' ELEMENT '>'\n    ;\n\ncontent:\n     ELEMENT\n    |tag\n    ;\n\nELEMENT: [a-zA-Z]+;\nWS: [ \\t\\n\\r\\f]+ -> skip ;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Les fichiers XML correspondantes auront la structure suivante:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<root>\n    <child>Value</child>\n    <secondChild>\n        <inner>InnerValue</inner>\n    </secondChild>\n</root>\n<secondRoot>\n    OtherValue\n</secondRoot>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Vous pouvez voir dans le grammaire que les valeurs, aussi que les noms des \xe9tiquettes sont des cha\xeenes contenant seulement des lettres."}),"\n",(0,r.jsxs)(n.p,{children:["Maintenant, apr\xe8s avoir compil\xe9 le programme qui contient notre nouvelle grammaire, on peut voir, dans le dossier ",(0,r.jsx)(n.code,{children:"app/build/generated-src/antlr"}),", l'interface ",(0,r.jsx)(n.code,{children:"demoVisitor.java"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public interface demoVisitor<T> extends ParseTreeVisitor<T> {\n\t/**\n\t * Visit a parse tree produced by {@link demoParser#start}.\n\t * @param ctx the parse tree\n\t * @return the visitor result\n\t */\n\tT visitStart(demoParser.StartContext ctx);\n\t/**\n\t * Visit a parse tree produced by {@link demoParser#tag}.\n\t * @param ctx the parse tree\n\t * @return the visitor result\n\t */\n\tT visitTag(demoParser.TagContext ctx);\n\t/**\n\t * Visit a parse tree produced by {@link demoParser#content}.\n\t * @param ctx the parse tree\n\t * @return the visitor result\n\t */\n\tT visitContent(demoParser.ContentContext ctx);\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Ce qui ce passe c\u2019est qu\u2019au moment de la compilation, ANTLR g\xe9n\xe8re, pour chaque r\xe8gle de notre grammaire, une fonction pour le visiteur. Cettes fonctions ont le nom ",(0,r.jsx)(n.code,{children:"visit<nom_de_la_r\xe8gle>()"}),". Le visiteur recevra comme entr\xe9e notre arbre d\u2019analyse (la racine duquel corr\xe9spond \xe0 une r\xe8gle) et il appellera la fonction corr\xe9spondante."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Au dehors des fonctions sp\xe9cifiques \xe0 notre grammaire, le visiteur aura toujours la fonction ",(0,r.jsx)(n.code,{children:"visit()"}),", \xe0 laquelle on peut donner un param\xe8tre qui appartient \xe0 n\u2019importe quelle r\xe8gle de notre grammaire. Retenez cette fonction, car on l\u2019utilisera beaucoup dans notre code!"]})}),"\n",(0,r.jsxs)(n.p,{children:["Pour chacune de cettes fonctions, on re\xe7oit un param\xe8tre qui repr\xe9sente le contexte du r\xe8gle dans laquelle on se trouve. Avec ce contexte, on peut acc\xe9der au corps de la production. Par exemple, pour le contexte de la fonction ",(0,r.jsx)(n.code,{children:"visitContent()"}),", on aura la fonction ",(0,r.jsx)(n.code,{children:"ctx.tag()"}),", qui renvoie le contexte de la r\xe8gle ",(0,r.jsx)(n.code,{children:"tag"})," qui existe dans notre variable ",(0,r.jsx)(n.code,{children:"content"})," (voyez la d\xe9finition du ",(0,r.jsx)(n.code,{children:"content"})," dans la grammaire). Pour plusieurs informations sur les contextes, regardez ",(0,r.jsx)(n.a,{href:"https://www.antlr.org/api/Java/org/antlr/v4/runtime/RuleContext.html",children:"ici"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"context_field",src:t(1989).A+"",width:"833",height:"135"})}),"\n",(0,r.jsxs)(n.p,{children:["Au dehors de tout simplement acc\xe9der aux composantes du corps d\u2019une r\xe8gle, on peut faire encore une chose: appeller la fonction du visiteur pour la composante (donc aller en profondeur dans l\u2019arbre de parse). On fait cela toujours avec la fonction ",(0,r.jsx)(n.code,{children:"visit()"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"implantation",children:"Implantation"}),"\n",(0,r.jsx)(n.p,{children:"On a vu que ANTLR nous a g\xe9n\xe9r\xe9 une interface. Alors, on aura besoin d\u2019une implantation.\nPrenons le m\xeame exemple qu\u2019avant e essayons, pour un tel fichier, d\u2019afficher les informations d\u2019une autre mani\xe8re. L\u2019implantation sera la suivante:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'import org.antlr.v4.runtime.tree.AbstractParseTreeVisitor\n\nclass TP6Visitor : AbstractParseTreeVisitor<String>(), demoVisitor<String>{\n\n    override fun visitStart(ctx: demoParser.StartContext) : String{\n        var result: String = ""\n        for(tag: demoParser.TagContext in ctx.tag()){\n            val vst = this.visit(tag)\n            result += "Found primary tag: \\n$vst"\n            result +="\\n"\n        }\n        return result\n    }\n\n    override fun visitTag(ctx: demoParser.TagContext): String{\n        var result: String = ""\n        result += "Opening tag with name: ${ctx.ELEMENT(0).text}"\n        result += "\\n"\n        for(content: demoParser.ContentContext in ctx.content()){\n            result += this.visit(content)\n        }\n        result += "Closing tag with name: ${ctx.ELEMENT(1).text}"\n        return result\n    }\n\n    override fun visitContent(ctx: demoParser.ContentContext): String{\n        var result: String = ""\n        if(ctx.ELEMENT()!= null){\n            result += "Found value inside tags: ${ctx.ELEMENT().text} \\n"\n        }\n        if(ctx.tag()!= null){\n            result += this.visit(ctx.tag())\n            result += "\\n"\n        }\n        return result\n    }\n} \n'})}),"\n",(0,r.jsx)(n.p,{children:"La sortie sera la suivante pour les contenus donn\xe9s avant:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Found primary tag: \nOpening tag with name: root\nOpening tag with name: child\nFound value inside tags: Value \nClosing tag with name: child\nOpening tag with name: secondChild\nOpening tag with name: inner\nFound value inside tags: InnerValue \nClosing tag with name: inner\nClosing tag with name: secondChild\nClosing tag with name: root\nFound primary tag: \nOpening tag with name: secondRoot\nFound value inside tags: OtherValue \nClosing tag with name: secondRoot\n"})}),"\n",(0,r.jsx)(n.p,{children:"Ce qu\u2019on a r\xe9ussi de faire c\u2019est d\u2019identifier, pour chaque \xe9tiquette, le nom et la valeur. Il y a encore quelques observations \xe0 faire:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["le type de retour de chaque fonction est ",(0,r.jsx)(n.code,{children:"String"}),", mais on peut choisir n\u2019importe quel type. Cela d\xe9pend de ce qu\u2019on a besoin."]}),"\n",(0,r.jsxs)(n.li,{children:["d\u2019habitude, pour traiter chaque composante du corps d\u2019une production, on a ",(0,r.jsx)(n.strong,{children:"deux options"}),": s\u2019il s\u2019agit d\u2019un j\xe9ton, on peut prendre directement le texte (comme pour ",(0,r.jsx)(n.code,{children:"ELEMENT"}),"); autrement, on utilise la methode ",(0,r.jsx)(n.code,{children:"visit()"})," pour appeller la fonction du visiteur."]}),"\n",(0,r.jsxs)(n.li,{children:["dans le cas o\xf9 on peut avoir ",(0,r.jsx)(n.strong,{children:"plusieurs variables/j\xe9tons"})," du m\xeame type dans une r\xe8gle (par exemple, on peut avoir plusieurs ",(0,r.jsx)(n.code,{children:"tag"})," dans ",(0,r.jsx)(n.code,{children:"start"}),"), la m\xe9thode renvoie ",(0,r.jsx)(n.strong,{children:"une liste"})]}),"\n",(0,r.jsxs)(n.li,{children:["pour les r\xe8gles dans lesquelles on a plusieurs branches possibles (par exemple pour content), il faut toujours v\xe9rifier o\xf9 on se trouve. Les fonctions de la variable ",(0,r.jsx)(n.code,{children:"ctx"})," renvoient des valeurs non-nulles seulement pour les composantes de la r\xe8gle sur laquelle on se trouve. C\u2019est pour cela qu\u2019on v\xe9rifie si ",(0,r.jsx)(n.code,{children:"ELEMENT()"})," et ",(0,r.jsx)(n.code,{children:"tag()"})," renvoient des valeurs nulles dans la fonction ",(0,r.jsx)(n.code,{children:"visitContent()."})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\xe9tiquettes-pour-les-r\xe8gles-et-les-variables",children:"\xc9tiquettes pour les r\xe8gles et les variables"}),"\n",(0,r.jsxs)(n.p,{children:["Pour simplifier le processus de traitement dans les fonctions du visiteur, on peut ajouter aussi des ",(0,r.jsx)(n.strong,{children:"\xe9tiquettes"})," dans notre grammaire. On peut les ajouter soit dans les productions pour nommer nos composantes, soit au niveau des r\xe8gles pour les s\xe9parer."]}),"\n",(0,r.jsxs)(n.p,{children:["Pour ajouter des \xe9tiquettes dans les productions, on associe un nom de variable aux composantes d\xe9sir\xe9es en utilisant ",(0,r.jsx)(n.code,{children:"="}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-antlr4",children:"//Exemple des \xe9tiquettes pour les composantes\ntag: '<' left = ELEMENT '>' content* '</' right = ELEMENT '>'\n    ;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Maintenant, dans ",(0,r.jsx)(n.code,{children:"demoParser.TagContext"})," on aura deux nouvelles m\xe9thodes: ",(0,r.jsx)(n.code,{children:"left()"})," et ",(0,r.jsx)(n.code,{children:"right()"})," qui corr\xe9spondent \xe0 ",(0,r.jsx)(n.code,{children:"ctx.ELEMENT(0)"})," et ",(0,r.jsx)(n.code,{children:"ctx.ELEMENT(1)"}),". On peut toujours utiliser aussi la liste dans ",(0,r.jsx)(n.code,{children:"ELEMENT()"}),", elle reste la m\xeame apr\xe8s avoir ajout\xe9 les \xe9tiquettes."]}),"\n",(0,r.jsxs)(n.p,{children:["Pour les \xe9tiquettes des r\xe8gles, il faut ajouter un ",(0,r.jsx)(n.code,{children:"#"})," suivi par un nom choisi par nous. Pour les r\xe8gles qui ont plusieurs branches s\xe9par\xe9es par un ",(0,r.jsx)(n.code,{children:"|"})," , il faut donner une \xe9tiquette ",(0,r.jsx)(n.strong,{children:"pour chaque branche"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-antlr4",children:"//Exemple des \xe9tiquettes des r\xe8gles\ncontent:\n     ELEMENT  #contentElementRule\n    |tag\t  #tagRule\n    ;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"\t/**\n\t * Visit a parse tree produced by the {@code contentElementRule}\n\t * labeled alternative in {@link demoParser#content}.\n\t * @param ctx the parse tree\n\t * @return the visitor result\n\t */\n\tT visitContentElementRule(demoParser.ContentElementRuleContext ctx);\n\t/**\n\t * Visit a parse tree produced by the {@code tagRule}\n\t * labeled alternative in {@link demoParser#content}.\n\t * @param ctx the parse tree\n\t * @return the visitor result\n\t */\n\tT visitTagRule(demoParser.TagRuleContext ctx);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Maintenant, dans la classe ",(0,r.jsx)(n.code,{children:"demoVisitor.java"}),", au lieu de la m\xe9thode ",(0,r.jsx)(n.code,{children:"visitContent()"}),", on trouve deux m\xe9thodes qui corr\xe9spondent aux \xe9tiquettes cr\xe9es avant. On n\u2019a plus besoin de faire la v\xe9rification de l\u2019exemple pr\xe9c\xe9dent."]}),"\n",(0,r.jsx)(n.h2,{id:"biblioth\xe8que-du-compilateur",children:"Biblioth\xe8que du compilateur"}),"\n",(0,r.jsxs)(n.p,{children:["Pour continuer le processus de compilation, nous avons besoin de prendre l\u2019information de l\u2019arbre d\u2019analyse et de la repr\xe9senter d\u2019une mmani\xe8re avec laquelle on peut travailler. Pour le cours de ALF, on a choisi de vous offrir une collection de classes, chacune corr\xe9spondante \xe0 un genre d\u2019instruction possible. On appelle cette collection notre ",(0,r.jsx)(n.strong,{children:"biblioth\xe8que du compilateur"})," (compiler framework)."]}),"\n",(0,r.jsx)(n.p,{children:"Il y a beaucoup de classes, donc on ne va pas les documenter toutes dans ce TP. On vous laisse \xe0 lire la documentation o\xf9 vous trouverez les constructeurs, champs et m\xe9thodes pour chaque classe, aussi que des exemple d\u2019utilisation."}),"\n",(0,r.jsx)(n.p,{children:"La structure de base sera la suivante: pour n\u2019importe quel programme, on commencera avec une instance de la classe Module (qui est utilis\xe9e pour repr\xe9senter un programme entier) qui contiendra une instance de la classe Block (utilis\xe9e pour d\xe9finir un ensemble d\u2019instructions dans la m\xeame port\xe9). Dans cette instance du Block on peut avoir n\u2019importe quelles autres instances."}),"\n",(0,r.jsxs)(n.p,{children:["Voyons comment les utiliser dans notre code. Vous pouvez voir, dans le projet pour le TP d\u2019aujourd\u2019hui, dans le dossier ",(0,r.jsx)(n.code,{children:"libs"}),", une archive avec l\u2019extension ",(0,r.jsx)(n.code,{children:".jar"}),". Vous trouverez l\xe0 toutes les classes. Ce que vous devez faire pour les utiliser, c\u2019est importer les classes n\xe9cessaires."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'import domain.ast.Module\nimport domain.ast.Block\nimport domain.ast.VariableDefinition\nimport domain.ast.Identifier\n\nfun main(){\n    val someVariableDefinition: VariableDefinition = \n        VariableDefinition(\n            variable = Identifier(title = "var1", line = 2), \n            line = 2\n        )     \n    val someBlock = Block(\n        statements = mutableListOf(someVariableDefinition), line = 1\n    )\n    val someModule = Module(\n        block = someBlock, line = 1\n    )        \n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Voil\xe0 un exemple pour symboliser, en utilisant notre biblioth\xe8que, un programme qui contient seulement une d\xe9finition d\u2019une variable (avec une instance de la classe VariableDefinition) qui a le nom var1 et qui se trouve \xe0 la ligne num\xe9ro 2."}),"\n",(0,r.jsx)(n.h2,{id:"combiner-les-deux",children:"Combiner les deux"}),"\n",(0,r.jsx)(n.p,{children:"On a besoin de combiner la biblioth\xe8que et le visiteur afin de traduire le code source qu\u2019on veut compiler dans un ensemble de classes. Les \xe9tapes sont les suivantes:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\xc9crivez la grammaire du langage"}),"\n",(0,r.jsxs)(n.li,{children:["Cr\xe9ez un visiteur en rempla\xe7ant le type g\xe9n\xe9ral ",(0,r.jsx)(n.code,{children:"T"})," avec ",(0,r.jsx)(n.code,{children:"AstObject"})," (l\u2019interface pour toutes les classes qui repr\xe9sentent des instructions)."]}),"\n",(0,r.jsx)(n.li,{children:"Commencez \xe0 visiter l\u2019arbre d\u2019analyse avec le visiteur."}),"\n",(0,r.jsx)(n.li,{children:"Quand vous rencontrez un noeud qui corr\xe9spond \xe0 une instruction qu\u2019on peut repr\xe9senter avec des classes, utilisez le constructeur de la classe pour l\u2019instantier."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exercices",children:"Exercices"}),"\n",(0,r.jsxs)(n.ol,{start:"0",children:["\n",(0,r.jsxs)(n.li,{children:["Ouvrez la documentation pour la biblioth\xe8que du compilateur et lisez les informations pour les classes: ",(0,r.jsx)(n.code,{children:"Assignment"}),", ",(0,r.jsx)(n.code,{children:"BinaryExpression"}),", ",(0,r.jsx)(n.code,{children:"Value"}),". Voyez quels sont les param\xe8tres de leurs constructeurs et quel est leur but."]}),"\n",(0,r.jsxs)(n.li,{children:["Ouvrez le dossier ",(0,r.jsx)(n.code,{children:"TP6/Ex1"}),". Utilisez les classes de la biblioth\xe8que pour repr\xe9senter le code suivant:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",metastring:"showLineNumbers",children:"int var1;\n\n\nvar1 = 2*3 + 5;\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Ouvrez le dossier ",(0,r.jsx)(n.code,{children:"TP6/Ex2"}),". Lisez la grammaire donn\xe9e. Suivez les ",(0,r.jsx)(n.code,{children:"TODO"})," pour completer les r\xe8gles du visiteur pour qu\u2019il transforme le code source dans une repr\xe9sentation en utilisant les classes de la biblioth\xe8que."]}),"\n",(0,r.jsxs)(n.li,{children:["Ouvrez le dossier ",(0,r.jsx)(n.code,{children:"TP6/Ex3"}),". Prenez la grammaire pour les fichiers XML donn\xe9e comme exemple et modifiez-la pour qu\u2019elle accepte aussi des attributs pour les \xe9tiquettes.\nLes attributs auront la structure ",(0,r.jsx)(n.code,{children:'<attribute_name>="<value>"'})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<root align="center">\n    <child>Value</child>\n    <secondChild display="false" border="5px">\n        <inner>InnerValue</inner>\n    </secondChild>\n</root>\n<secondRoot action="close">\n    OtherValue\n</secondRoot>    \n'})}),"\n",(0,r.jsxs)(n.p,{children:["Cr\xe9ez le visiteur pour la grammaire. Sauvegardez et repr\xe9sentez les contenus en utilisant une instance de la classe ",(0,r.jsx)(n.code,{children:"XMLTag"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"bibliographie",children:"Bibliographie"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.antlr.org/api/Java/org/antlr/v4/runtime/tree/ParseTreeVisitor.html",children:"ANTLR Visitor"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/antlr/grammars-v4/blob/master/xml/XMLParser.g4",children:"Grammaire en ANTLR pour les fichiers XML"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(6540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);