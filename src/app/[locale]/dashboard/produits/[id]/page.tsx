

import { getProduitbyId } from "@/lib/datas";
import ProduitTemplate from "./produit-template";

const Produit = async ({
    params,
}: {
    params: { id: string }
}) => {
    const { id } = params;
    const { data } = await getProduitbyId(id)

    return <ProduitTemplate produit={data} />
};

export default Produit;
