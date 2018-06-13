(function () {
    const htmlStrTpl = `
        <p>
            Hello world
            <img
                src="//"
                alt="A bad image"
                onerror="var el = document.createElement('div'); el.textContent = 'JS event, via MESSAGE'; document.body.appendChild(el);"
            >
            <img
                src="https://s1.wp.com/wp-content/themes/a8c/automattic-2011/images/automattic-logo-2x.png?MESSAGE_ENCODE"
                alt="A8C logo"
            >
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/M3BM9TB-8yA?MESSAGE_ENCODE"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen></iframe>
            <video
                controls
                src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4?MESSAGE_ENCODE"
                poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217&MESSAGE_ENCODE"
                width="620"
            >
            <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">&quot;if they are unnecessary and simply cute, don&#39;t do them&quot; — <a href="https://t.co/HzAW17Gz6N">https://t.co/HzAW17Gz6N</a> - pretty sure I still do this always, and in Express/Koa/Mocha, it&#39;s always the multi-purpose functions or magical getter/setter that ends up never being worth the explanation</p>&mdash; TJ Holowaychuk 🙃 (@tjholowaychuk) <a href="https://twitter.com/tjholowaychuk/status/1004603755059298309?ref_src=twsrc%5Etfw">June 7, 2018</a></blockquote>
            <script
                async
                src="https://platform.twitter.com/widgets.js?MESSAGE_ENCODE"
                charset="utf-8"></script>
            <script>
                var el = document.createElement('div');
                el.textContent = 'JS script, via MESSAGE';
                document.body.appendChild(el);
            </script>
        </p>
    `;

    function getSampleEditorValue(message) {
        return htmlStrTpl
            .replace(/MESSAGE_ENCODE/g, encodeURIComponent(message))
            .replace(/MESSAGE/g, message);
    }

    // @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser#DOMParser_HTML_extension_for_other_browsers
    function parseFromString(markup) {
        var doc = document.implementation.createHTMLDocument('');

        if (markup.toLowerCase().indexOf('<!doctype') > -1) {
            doc.documentElement.innerHTML = markup;
        } else {
            doc.body.innerHTML = markup;
        }

        return doc;
    }

    function createElement() {
        var val = getSampleEditorValue('document.createElement');
        var el = document.createElement('div');
        el.innerHTML = val;
        return el;
    }

    function useDOMParser() {
        var val = getSampleEditorValue('DOMParser');
        var parser = new DOMParser();
        var el = parser.parseFromString(val, 'text/html');
        return el;
    }

    function useDOMParserPolyfill() {
        var val = getSampleEditorValue('DOMParserPolyfill');
        var el = parseFromString(val);
        return el;
    }

    console.log(createElement());
    console.log(useDOMParser());
    console.log(useDOMParserPolyfill());
})();
