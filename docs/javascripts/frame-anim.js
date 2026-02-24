(function () {
    function parseFiles(s) {
        return (s || "")
            .split(",")
            .map(x => x.trim())
            .filter(Boolean);
    }

    function stopListAnim(img) {
        if (img._animTimeout) clearTimeout(img._animTimeout);
        img._animTimeout = null;
    }

    function startListAnim(img) {
        stopListAnim(img);

        const dir = img.dataset.dir || "";
        const files = parseFiles(img.dataset.files);
        const fps = parseFloat(img.dataset.fps || "10");
        const loop = (img.dataset.loop || "true") !== "false";
        const endPauseSec = parseFloat(img.dataset.endPause || "0"); // <-- data-end-pause

        if (!files.length || fps <= 0) return;

        const urls = files.map(f => dir + f);

        // preload (optional)
        urls.forEach(u => { const im = new Image(); im.src = u; });

        const frameMs = 1000 / fps;
        const endPauseMs = Math.max(0, endPauseSec * 1000);

        let i = 0;
        img.src = urls[i];

        function schedule(delay) {
            img._animTimeout = setTimeout(tick, delay);
        }

        function tick() {
            // If we are currently on the last frame, pause before looping
            if (i === urls.length - 1) {
                if (!loop) return;      // stop on last frame
                i = 0;                  // wrap to start
                img.src = urls[i];
                schedule(frameMs);      // after restart, normal pacing
                return;
            }

            // Normal advance
            i++;
            img.src = urls[i];

            // If we JUST reached the last frame, apply the end pause
            if (i === urls.length - 1 && endPauseMs > 0) {
                schedule(endPauseMs);
            } else {
                schedule(frameMs);
            }
        }

        schedule(frameMs);
    }

    function init() {
        document.querySelectorAll("img[data-animate='list']").forEach(startListAnim);
    }

    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("navigation:complete", init);
})();