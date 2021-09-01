import React from "react";
import { Dialog, Slide } from "@material-ui/core";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
    const { children, hideDialogHandler, maxWidth, fullWidth, scrollType,isOpen } = props;

    return (
        <Dialog
            maxWidth={maxWidth}
            fullWidth={fullWidth}
            open={isOpen}
            scroll={scrollType ? scrollType : "paper"}
            onClose={hideDialogHandler}
            TransitionComponent={Transition}
            
        >
            {children}
        </Dialog>
    );
}