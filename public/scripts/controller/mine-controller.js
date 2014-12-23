define(['lib/events', 'model/mine', 'core/config', 'ui/mine-ui'],
    function(Events, Mine, Config, MineUI) {
        return {

            mine: null,
            mineElement: null,
            ui: null,

            init: function() {
                var noOfBlocks = Config.default_no_of_blocks;
                var width = Config.default_width;
                this.mine = new Mine(noOfBlocks, width);
                this.ui = new MineUI(this.mine);
            }

        };
    }
);