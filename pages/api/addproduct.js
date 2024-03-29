import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method === 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let p = new Product({

                brand: req.body[i].title,
                title: req.body[i].title,
                slug: req.body[i].slug,
                descr: req.body[i].descr,
                img: req.body[i].img,
                color: req.body[i].color,
                price: req.body[i].price,
                availableQty: req.body[i].availableQty,
            })
            await p.save()
        }
        res.status(200).json({success: "Success!" })
    }
    else {
        res.status(400).json({ error: "This method is not allowed!" })
    }
    let products = await Product.find()
    res.status(200).json({ products });
}
export default connectDb(handler)
