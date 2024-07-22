export const sendSuccess = (res, statusCode, message, data, extra) => {
    const response = {
        meta: {
            statusCode,
            ...extra
        },
        message,
        data: data ? data : null
    }

    res.status(statusCode).json(response)
}

export const sendError = (res, statusCode, message) => {
    const response = {
        meta: {
            statusCode
        },
        message
    }

    res.status(statusCode).json(response)
}