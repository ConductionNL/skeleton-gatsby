import * as React from "react";
import { useQueryClient } from "react-query";
import {useNotification} from "../../hooks/notifications";
import {Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow} from "@utrecht/component-library-react";


const NotificationPage = (props: any) => {
    const notificationId: string = props.params.id === "new" ? null : props.params.id;
    const queryClient = useQueryClient();
    const _useNotification = useNotification (queryClient);
    const getNotification =  _useNotification.getOne(notificationId);

    return (
        <>
            {getNotification.data && (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderCell>Title</TableHeaderCell>
                                <TableHeaderCell>Description</TableHeaderCell>
                                <TableHeaderCell>Date created</TableHeaderCell>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                                <TableRow>
                                    <TableCell>{getNotification.data.title}</TableCell>
                                    <TableCell>{getNotification.data.description}</TableCell>
                                    <TableCell>{new Date(getNotification.data["@dateCreated"]).toLocaleString("nl-NL")}</TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
            )}
        </>
    );
};

export default NotificationPage;
