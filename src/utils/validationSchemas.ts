import { error } from "console";

export const createTaskValidationSchema = {
    userId: {
        notEmpty: {
            errorMessage: "userId cannot be empty"
        },
        isUUID: {
            errorMessage: "userId must be a valid UUID"
        }
    },
    title: {
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
        isUUID: {
            errorMessage: "id must be a valid UUID"
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