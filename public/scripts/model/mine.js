define(['lib/events', 'model/block', 'core/config'],
    function(Events, Block, Config) {
        return Class.extend({

            blocks: [],

            init: function(noOfBlocks, width) {
                this.width = width;
                this.noOfBlocks = noOfBlocks;
                this.fillMine(noOfBlocks, width);
            },

            fillMine: function(noOfBlocks, width) {
                if (noOfBlocks % width === 0){
                    for(var i=0; i<noOfBlocks; i++) {
                        var block = new Block();
                        this.blocks.push(block);
                    }
                }
                else {
                    console.log("Number of blocks not evenly dividable by width!");
                }
            }
        })
    }
);