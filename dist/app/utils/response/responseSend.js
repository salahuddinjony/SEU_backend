// Utility function to send a standardized response
const sendResponse = (res, data) => {
    res.status(data.statusCode).json({
        success: data.success,
        message: data.message,
        data: data.data,
    });
};
export default sendResponse;
//# sourceMappingURL=responseSend.js.map