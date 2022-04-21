import * as React from "react";
import { useQueryClient } from "react-query";
import { Heading1, Article } from "@utrecht/component-library-react/dist";
import {useNotification} from "../../hooks/notifications";

const NotificationPage = (props: any) => {
    const notificationId: string = props.params.id === "new" ? null : props.params.id;
    const queryClient = useQueryClient();
    const _useNotification = useNotification (queryClient);
    const getNotification =  _useNotification.getOne(notificationId);

    return (
        <>
            {getNotification.data && (
                <>
                    <Heading1>{getNotification.data && getNotification.data.title} </Heading1>
                    <br />
                    <Article
                        dangerouslySetInnerHTML={{
                            __html: getNotification.data?.content.replaceAll("<h2>", '<h2 class="utrecht-heading-2">'),
                        }}
                    />
                </>
            )}
        </>
    );
};

export default NotificationPage;
