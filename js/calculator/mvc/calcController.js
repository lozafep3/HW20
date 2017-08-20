let calcController = (function () {
    function init() {
        let result = calcModel.calculate();

        calcView.init(result);
    }

    return {
        init: init
    }
})();