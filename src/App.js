// import style from './App.css';
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
// import MoreIcon from '@material-ui/icons/MoreVert';
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./style";
// import PersistentDrawerLeft from "./drawer.js";
import Avatar from "@material-ui/core/Avatar";
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import PersistentDrawerLeft from "./demo"




function App() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <PersistentDrawerLeft/>
//     <div>
//        <CssBaseline />
//       <AppBar elevation="4" className={clsx(classes.appBar, {
//           [classes.appBarShift]: open,
//         })}
// >
//         <Toolbar className={classes.appbar}>
//           <div>
//             <PersistentDrawerLeft />

//             {/* <IconButton > */}
//               <MenuIcon />
//             {/* </IconButton> */}
//             <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={open}
//                 onClose={handleClose}
//               >
//                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                 <MenuItem onClick={handleClose}>My account</MenuItem>
//               </Menu>
//           </div>

//           <Button onClick={handleMenu}>
//             <Typography
//               variant="h6"
//               className="title"
//               style={{
//                 color: "black",
//                 paddingRight: "20px",
//                 alignItems: "center",
//               }}
//             >
//               Name
//             </Typography>
//             <Avatar />
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </div>
  );
}

export default App;
