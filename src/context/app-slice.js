import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "nftverse-app",

    initialState: {
        isLoggedIn: false,
        userDetails: {
            name: null,
            email: null,
            userId: null,
        },
        selectedCategory:"",
        cartQuantity:0,
        cart:[],
        domain:'',
        subdomain:'',
        colors:{
            backgroundColor:null,
            iconColor:null,
            themeColor:null

        },
        walletAddress:[{address:'loading ...'}],
        isDarkMode: true,
        authToken: "94b50d5245430a72a9fe7c527c3130e4",
        page: '',
        blockchain:'',
        version: '',
        openModalPayment: false,
        logo: '',
        mainLogo:'',
        marketplaceName: 'loading...',
        isNewAccount:false,
        metaMaskPresent: false,
        marketplaceAddress:'',
        marketplaceId:'',
        marketplaceContent:{bacgroundColor:null},
        footerData:{bacgroundColor:null},
        productDetails:[],
        walletLoading:false,
        paymentData: {
            usdToEthereumPrice: '',
            marketId: '',
            nftSrc: '',
            collectionId: '',
            nftPrice: '',
            nftId: '',
            title: '',
            blockchainNftId: '',
            blockchain: '',
            type: '',
            ipfsHash: '',
            assetId:'',
            s3url:'',
            assetType:'',
            scale: '',
            price: ''
        }
    },
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
        toggleDarkMode(state) {
            state.isDarkMode = !state.isDarkMode;
        },
        updateUserDetails(state, action) {
            const email = action.payload.email ? action.payload.email : state.userDetails.email;
            const name = action.payload.name ? action.payload.name : state.userDetails.name;
            const userId = action.payload.userId ? action.payload.userId : state.userDetails.userId;

            state.userDetails = {
                userId,
                email,
                name,
            };
        },
        setSelectedCategory(state,action){
            state.selectedCategory=action.payload
        },
        updateColors(state,action){
            state.colors={
            backgroundColor:action.payload.bacgroundColor,
            iconColor:action.payload.iconColor,
            themeColor:action.payload.themeColor
            }
        },
        setCartQuantity(state){
          
            state.cartQuantity = state.cart?.length;
        },
        setCart(state,action){
            state.cart =  action.payload;
        },
        paymentData(state, action) {
            const usdToEthereumPrice = action.payload.usdToEthereumPrice;
            const marketId = action.payload.marketId;
            const nftSrc = action.payload.nftSrc;
            const collectionId = action.payload.collectionId;
            const nftPrice = action.payload.nftPrice;
            const nftId = action.payload.nftId;
            const title = action.payload.title;
            const blockchainNftId = action.payload.blockchainNftId;
            const blockchain = action.payload.blockchain;
            const type = action.payload.type;
            const ipfsHash = action.payload.ipfsHash;
            const assetType = action.payload.assetType
            const s3url = action.payload.s3url
            const assetId = action.payload.assetId
            const scale = action.payload.scale;
            const price = action.payload.price
            state.paymentData = {
                usdToEthereumPrice,
                marketId,
                nftSrc,
                collectionId,
                nftPrice,
                nftId,
                title,
                blockchainNftId,
                blockchain,
                type,
                ipfsHash,
                assetId,
                s3url,
                assetType,
                scale,
                price,
            };
        },
        updateAuthToken(state, action) {
            state.authToken = action.payload;
        },
        toggleNewSignup(state) {
            state.newSignup = !state.newSignup;
        },
        togglePasswordCreated(state) {
            state.passwordCreated = !state.passwordCreated;
        },
        toggleUpdateProfile(state) {
            state.updateProfile = !state.updateProfile;
        },
        selectPage(state, action) {
            state.page = action.payload;
        },
        currentVersion(state, action) {
            state.version = action.payload;
        },
        setOpenModalPayment(state) {
            state.openModalPayment = !state.openModalPayment;
        },
        NavbarHomeLogo(state, action) {
            state.logo = action.payload;
        },
        marketplaceName(state, action) {
            state.marketplaceName = action.payload.charAt(0).toUpperCase() + action.payload.slice(1);
        },
        setBlockChain(state,action){
            state.blockchain = action.payload
        },
        isModalMetaMaskOpen(state, action) {
            state.metaMaskPresent = action.payload;
        },
        handleIsNewAccount(state,action){
            state.isNewAccount = action.payload;
        },
        setMarketplaceAddress(state,action){
            state.marketplaceAddress=action.payload;
        },
        setMarketplaceId(state,action){
            state.marketplaceId = action.payload;
        },
        homePageMainLogo(state,action){
            state.mainLogo=action.payload;
        },
        setMarketplaceContent(state,action){
            state.marketplaceContent = action.payload;
        },
        setFooterData(state,action){
            state.footerData = action.payload;
        },
        setProductDetails(state,action){
            state.productDetails = action.payload;
        },
        setWalletAddress(state,action){
            state.walletAddress = action.payload;
        },
        setWalletLoading(state,action){
            state.walletLoading = action.payload;
        },
        setDomain(state,action){
            state.domain = action.payload;
        },
        setSubDomain(state,action){
            state.subdomain = action.payload;
        }
    },
});

const appActions = appSlice.actions;

export { appActions };
export default appSlice;