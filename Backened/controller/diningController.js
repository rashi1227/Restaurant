import Dine from '../model/diningModal.js'; 

export const getDishes = async (req, res) => {
    try {
        const dine = await Dine.find();
        res.status(200).json(dine);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error', error });
    }
};
