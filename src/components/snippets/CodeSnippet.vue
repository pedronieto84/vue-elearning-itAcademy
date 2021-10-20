<template>
    <div class="container">
        Javascript:
        <highlightjs language='javascript' :code="codeJS"/>
        Java:
        <highlightjs language="java" :code="codeJava"/>
        Python:
        <highlightjs language="python" :code="codePython"/>
        HTML:
        <highlightjs language="html" :code="codeHTML"/>
    </div>
</template>

<script>

export default {
    data() {
        return {
            codeJS: 'var x = 1;\n var a = "JS";\n console.log(x)',
            codeJava: 'int y = 3;\n var b = "Java";\n System.out.print(y)',
            codePython: 'z = 5;\n var c = "Python";\n print [z]',
            codeHTML: `
<div>
    <h1>Hola</h1>
</div>
`
        }
    }
}
</script>