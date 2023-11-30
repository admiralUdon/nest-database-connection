import { ValidationOptions, registerDecorator, ValidationArguments } from 'class-validator';
 
  export function HasValidCharacters(validationOptions?: ValidationOptions) {
    return function (object: Record<string, any>, propertyName: string) {
        registerDecorator({
            name: 'hasValidCharacters',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    // You can adjust the regular expression as per your requirements
                    const pattern = /^[\w\s]+$/; // Only allows letters, numbers, and whitespace
    
                    return typeof value === 'string' && pattern.test(value);
                },
            },
        });
    };
}