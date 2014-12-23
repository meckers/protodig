define(['lib/events', 'core/config'],
    function(Events, Config) {
        return Class.extend({

            init: function(mine) {
                this.mine = mine;
                this.create();
                this.listen();
            },

            create: function() {
                if ($('#mine')) {
                    this.mineElement = $('#mine');
                    this.styleMine();
                    this.appendBlocks();
                }
            },

            listen: function() {

            },

            styleMine: function() {
                this.mineElement.css({
                    'width' : Config.block_size * this.mine.width,
                    'height' : Config.block_size * (this.mine.noOfBlocks / this.mine.width)
                });
            },

            appendBlocks: function() {
                for (var i=0; i<this.mine.blocks.length; i++) {
                    var block = $('<div></div>');
                    block.addClass('block');
                    block.css({
                        'width': (Config.block_size - 2) + 'px',
                        'height': (Config.block_size - 2) + 'px'
                    });
                    this.mineElement.append(block);
                }
            }

        });
    }
);
