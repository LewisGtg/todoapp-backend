export const createTaskValidationSchema = {
    name: {
        notEmpty: {
            errorMessage: "name cannot be empty"
        },
        isString: {
            errorMessage: "name must be a string"
        },
    },
    description: {
        isString: {
            errorMessage: "description must be a string"
        },
        isLength: {
            options: {
                max: 255
            },
            errorMessage: "description must contain at maximum 255 characters"
        }
    }
};

export const getTaskByIdValidationSchema = {
    id: {
        isNumeric: {
            options: {
                no_symbols: true,
            },
            errorMessage: "id must be a positive number"
        }
    }
}

export const updateTaskValidationSchema = {
    ...getTaskByIdValidationSchema,
    ...createTaskValidationSchema
}

export const deleteTaskValidationSchema = {
    ...getTaskByIdValidationSchema
}