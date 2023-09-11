"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Card_1 = require("react-bootstrap/Card");
var Row_1 = require("react-bootstrap/Row");
var Col_1 = require("react-bootstrap/Col");
var Button_1 = require("react-bootstrap/Button");
var bi_1 = require("react-icons/bi");
var react_use_cart_1 = require("react-use-cart");
var ProductGrid = function (_a) {
    var data = _a.data;
    var _b = react_use_cart_1.useCart(), addItem = _b.addItem, items = _b.items, emptyCart = _b.emptyCart, getItem = _b.getItem;
    return (react_1["default"].createElement(Row_1["default"], { className: "p-0 m-0" }, data.map(function (product) {
        var _a;
        return (react_1["default"].createElement(Col_1["default"], { key: product.id, xs: 6, sm: 6, md: 3, lg: 3, className: "my-1 mx-0" },
            react_1["default"].createElement(Card_1["default"], { className: "h-100" },
                react_1["default"].createElement(Button_1["default"], { className: 'ml-auto inline border-none', onClick: function () { return emptyCart(); } }, false ? react_1["default"].createElement(bi_1.BiSolidHeart, { color: 'red' }) : react_1["default"].createElement(bi_1.BiHeart, { color: 'red' })),
                react_1["default"].createElement("div", { className: "p-1 mx-auto" },
                    react_1["default"].createElement(Card_1["default"].Img, { variant: "top", src: product.image, alt: product.title, style: { height: "150px" } })),
                react_1["default"].createElement(Card_1["default"].Body, { className: "relative" },
                    react_1["default"].createElement(Card_1["default"].Title, { className: "line-clamp-2 text-sm" }, product.title)),
                react_1["default"].createElement(Card_1["default"].Footer, { className: "text-center p-1" },
                    react_1["default"].createElement("div", { className: "d-flex justify-content-between align-items-center" },
                        react_1["default"].createElement(Card_1["default"].Text, { className: "text-muted text-sm", as: "b" }, product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })),
                        react_1["default"].createElement(Button_1["default"], { onClick: function () { return addItem(product); }, className: "btn rounded-lg text-light bg-primary btn-sm btn-primary position-relative" },
                            "Comprar",
                            getItem(product.id) &&
                                (react_1["default"].createElement("span", { className: "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" },
                                    ((_a = getItem(product.id)) === null || _a === void 0 ? void 0 : _a.quantity) || '',
                                    react_1["default"].createElement("span", { className: "visually-hidden" }, "Carrinho")))))))));
    })));
};
exports["default"] = ProductGrid;
