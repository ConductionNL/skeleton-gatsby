import * as React from "react";
import { useQueryClient } from "react-query";


const MeldingDetailPage = (props: any) => {
    const meldingId: string = props.params.id === "new" ? null : props.params.id;
    const queryClient = useQueryClient();
    const _useMeldingen= useMeldingen(queryClient);
    const getProduct = _useMeldingDetail.getOne(meldingId);

    return (
        <>
            {getProduct.data && (
                <>


                </>
            )}
        </>
    );
};

export default MeldingDetailPage;
