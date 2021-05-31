import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    product : [
        {
          rank: {
            type: Number,
          },
          brandLabel: {
            type: String,
          },
          listLabel: {
            type: String,
          },
          mainImageView: {
            type: String,
          },
          reviewLabel : {
            type: String,
          },
        },
      ],
});

export default mongoose.model<mongoose.Document>("Product", ProductSchema);
