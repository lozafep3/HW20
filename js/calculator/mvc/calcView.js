let calcView = (function () {
    function init(result) {
        drawResult(result);
    }

    function drawResult(result) {
        $('[name = output]').val(result);
    }

    return {
        init: init
    }
})();