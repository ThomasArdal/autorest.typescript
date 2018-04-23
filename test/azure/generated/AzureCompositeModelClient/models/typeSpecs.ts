/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { booleanSpec, byteArraySpec, compositeSpec, CompositeTypeSpec, dateSpec, dateTimeRfc1123Spec, dateTimeSpec, dictionarySpec, numberSpec, objectSpec, sequenceSpec, stringSpec, timeSpanSpec } from "ms-rest-js";

/**
 * The product documentation.
 */
export const Product: CompositeTypeSpec = compositeSpec({
  typeName: "Product",
  propertySpecs: {
    /**
     * Unique identifier representing a specific product for a given latitude & longitude. For
     * example, uberX in San Francisco will have a different product_id than uberX in Los Angeles.
     */
    productId: {
      serializedName: "product_id",
      valueSpec: stringSpec
    },
    /**
     * Description of product.
     */
    description: {
      valueSpec: stringSpec
    },
    /**
     * Display name of product.
     */
    displayName: {
      serializedName: "display_name",
      valueSpec: stringSpec
    },
    /**
     * Capacity of product. For example, 4 people.
     */
    capacity: {
      valueSpec: stringSpec
    },
    /**
     * Image URL representing the product.
     */
    image: {
      valueSpec: stringSpec
    }
  }
});

export const CatalogDictionary: CompositeTypeSpec = compositeSpec({
  typeName: "CatalogDictionary",
  propertySpecs: {
    /**
     * Dictionary of products
     */
    productDictionary: {
      valueSpec: dictionarySpec(Product)
    }
  }
});

export const CatalogArray: CompositeTypeSpec = compositeSpec({
  typeName: "CatalogArray",
  propertySpecs: {
    /**
     * Array of products
     */
    productArray: {
      valueSpec: sequenceSpec(Product)
    }
  }
});

export const CatalogArrayOfDictionary: CompositeTypeSpec = compositeSpec({
  typeName: "CatalogArrayOfDictionary",
  propertySpecs: {
    /**
     * Array of dictionary of products
     */
    productArrayOfDictionary: {
      valueSpec: sequenceSpec(dictionarySpec(Product))
    }
  }
});

export const CatalogDictionaryOfArray: CompositeTypeSpec = compositeSpec({
  typeName: "CatalogDictionaryOfArray",
  propertySpecs: {
    /**
     * Dictionary of Array of product
     */
    productDictionaryOfArray: {
      valueSpec: dictionarySpec(sequenceSpec(Product))
    }
  }
});

export const ErrorModel: CompositeTypeSpec = compositeSpec({
  typeName: "ErrorModel",
  propertySpecs: {
    status: {
      valueSpec: numberSpec
    },
    message: {
      valueSpec: stringSpec
    }
  }
});

export const Basic: CompositeTypeSpec = compositeSpec({
  typeName: "Basic",
  propertySpecs: {
    /**
     * Basic Id
     */
    id: {
      valueSpec: numberSpec
    },
    /**
     * Name property with a very long description that does not fit on a single line and a line
     * break.
     */
    name: {
      valueSpec: stringSpec
    },
    /**
     * Possible values include: 'cyan', 'Magenta', 'YELLOW', 'blacK'
     */
    color: {
      valueSpec: stringSpec
    }
  }
});

export const Pet: CompositeTypeSpec = compositeSpec({
  typeName: "Pet",
  propertySpecs: {
    id: {
      valueSpec: numberSpec
    },
    name: {
      valueSpec: stringSpec
    }
  }
});

export const Dog: CompositeTypeSpec = compositeSpec({
  typeName: "Dog",
  propertySpecs: {
    id: {
      valueSpec: numberSpec
    },
    name: {
      valueSpec: stringSpec
    },
    food: {
      valueSpec: stringSpec
    }
  }
});

export const Cat: CompositeTypeSpec = compositeSpec({
  typeName: "Cat",
  propertySpecs: {
    id: {
      valueSpec: numberSpec
    },
    name: {
      valueSpec: stringSpec
    },
    color: {
      valueSpec: stringSpec
    },
    hates: {
      valueSpec: sequenceSpec(Dog)
    }
  }
});

export const Siamese: CompositeTypeSpec = compositeSpec({
  typeName: "Siamese",
  propertySpecs: {
    id: {
      valueSpec: numberSpec
    },
    name: {
      valueSpec: stringSpec
    },
    color: {
      valueSpec: stringSpec
    },
    hates: {
      valueSpec: sequenceSpec(Dog)
    },
    breed: {
      valueSpec: stringSpec
    }
  }
});

export const Fish: CompositeTypeSpec = compositeSpec({
  typeName: "Fish",
  propertySpecs: {
    species: {
      valueSpec: stringSpec
    },
    length: {
      required: true,
      valueSpec: numberSpec
    },
    siblings: {
      valueSpec: sequenceSpec("Fish")
    },
    /**
     * Polymorphic Discriminator
     */
    fishtype: {
      required: true,
      valueSpec: stringSpec
    }
  }
});

export const Salmon: CompositeTypeSpec = compositeSpec({
  typeName: "Salmon",
  propertySpecs: {
    species: {
      valueSpec: stringSpec
    },
    length: {
      required: true,
      valueSpec: numberSpec
    },
    siblings: {
      valueSpec: sequenceSpec(Fish)
    },
    /**
     * Polymorphic Discriminator
     */
    fishtype: {
      required: true,
      valueSpec: stringSpec
    },
    location: {
      valueSpec: stringSpec
    },
    iswild: {
      valueSpec: booleanSpec
    }
  }
});

export const SmartSalmon: CompositeTypeSpec = compositeSpec({
  typeName: "SmartSalmon",
  propertySpecs: {
    species: {
      valueSpec: stringSpec
    },
    length: {
      required: true,
      valueSpec: numberSpec
    },
    siblings: {
      valueSpec: sequenceSpec(Fish)
    },
    /**
     * Polymorphic Discriminator
     */
    fishtype: {
      required: true,
      valueSpec: stringSpec
    },
    location: {
      valueSpec: stringSpec
    },
    iswild: {
      valueSpec: booleanSpec
    },
    /**
     * Unmatched properties from the message are deserialized this collection
     */
    additionalProperties: {
      valueSpec: dictionarySpec(objectSpec)
    },
    collegeDegree: {
      serializedName: "college_degree",
      valueSpec: stringSpec
    }
  }
});

export const Shark: CompositeTypeSpec = compositeSpec({
  typeName: "Shark",
  propertySpecs: {
    species: {
      valueSpec: stringSpec
    },
    length: {
      required: true,
      valueSpec: numberSpec
    },
    siblings: {
      valueSpec: sequenceSpec(Fish)
    },
    /**
     * Polymorphic Discriminator
     */
    fishtype: {
      required: true,
      valueSpec: stringSpec
    },
    age: {
      valueSpec: numberSpec
    },
    birthday: {
      required: true,
      valueSpec: dateTimeSpec
    }
  }
});

export const Sawshark: CompositeTypeSpec = compositeSpec({
  typeName: "Sawshark",
  propertySpecs: {
    species: {
      valueSpec: stringSpec
    },
    length: {
      required: true,
      valueSpec: numberSpec
    },
    siblings: {
      valueSpec: sequenceSpec(Fish)
    },
    /**
     * Polymorphic Discriminator
     */
    fishtype: {
      required: true,
      valueSpec: stringSpec
    },
    age: {
      valueSpec: numberSpec
    },
    birthday: {
      required: true,
      valueSpec: dateTimeSpec
    },
    picture: {
      valueSpec: byteArraySpec
    }
  }
});

export const Goblinshark: CompositeTypeSpec = compositeSpec({
  typeName: "Goblinshark",
  propertySpecs: {
    species: {
      valueSpec: stringSpec
    },
    length: {
      required: true,
      valueSpec: numberSpec
    },
    siblings: {
      valueSpec: sequenceSpec(Fish)
    },
    /**
     * Polymorphic Discriminator
     */
    fishtype: {
      required: true,
      valueSpec: stringSpec
    },
    age: {
      valueSpec: numberSpec
    },
    birthday: {
      required: true,
      valueSpec: dateTimeSpec
    },
    jawsize: {
      valueSpec: numberSpec
    },
    /**
     * Colors possible. Possible values include: 'pink', 'gray', 'brown'
     */
    color: {
      valueSpec: stringSpec
    }
  }
});

export const Cookiecuttershark: CompositeTypeSpec = compositeSpec({
  typeName: "Cookiecuttershark",
  propertySpecs: {
    species: {
      valueSpec: stringSpec
    },
    length: {
      required: true,
      valueSpec: numberSpec
    },
    siblings: {
      valueSpec: sequenceSpec(Fish)
    },
    /**
     * Polymorphic Discriminator
     */
    fishtype: {
      required: true,
      valueSpec: stringSpec
    },
    age: {
      valueSpec: numberSpec
    },
    birthday: {
      required: true,
      valueSpec: dateTimeSpec
    }
  }
});

export const IntWrapper: CompositeTypeSpec = compositeSpec({
  typeName: "IntWrapper",
  propertySpecs: {
    field1: {
      valueSpec: numberSpec
    },
    field2: {
      valueSpec: numberSpec
    }
  }
});

export const LongWrapper: CompositeTypeSpec = compositeSpec({
  typeName: "LongWrapper",
  propertySpecs: {
    field1: {
      valueSpec: numberSpec
    },
    field2: {
      valueSpec: numberSpec
    }
  }
});

export const FloatWrapper: CompositeTypeSpec = compositeSpec({
  typeName: "FloatWrapper",
  propertySpecs: {
    field1: {
      valueSpec: numberSpec
    },
    field2: {
      valueSpec: numberSpec
    }
  }
});

export const DoubleWrapper: CompositeTypeSpec = compositeSpec({
  typeName: "DoubleWrapper",
  propertySpecs: {
    field1: {
      valueSpec: numberSpec
    },
    field56ZerosAfterTheDotAndNegativeZeroBeforeDotAndThisIsALongFieldNameOnPurpose: {
      serializedName: "field_56_zeros_after_the_dot_and_negative_zero_before_dot_and_this_is_a_long_field_name_on_purpose",
      valueSpec: numberSpec
    }
  }
});

export const BooleanWrapper: CompositeTypeSpec = compositeSpec({
  typeName: "BooleanWrapper",
  propertySpecs: {
    fieldTrue: {
      serializedName: "field_true",
      valueSpec: booleanSpec
    },
    fieldFalse: {
      serializedName: "field_false",
      valueSpec: booleanSpec
    }
  }
});

export const StringWrapper: CompositeTypeSpec = compositeSpec({
  typeName: "StringWrapper",
  propertySpecs: {
    field: {
      valueSpec: stringSpec
    },
    empty: {
      valueSpec: stringSpec
    },
    nullProperty: {
      serializedName: "null",
      valueSpec: stringSpec
    }
  }
});

export const DateWrapper: CompositeTypeSpec = compositeSpec({
  typeName: "DateWrapper",
  propertySpecs: {
    field: {
      valueSpec: dateSpec
    },
    leap: {
      valueSpec: dateSpec
    }
  }
});

export const DatetimeWrapper: CompositeTypeSpec = compositeSpec({
  typeName: "DatetimeWrapper",
  propertySpecs: {
    field: {
      valueSpec: dateTimeSpec
    },
    now: {
      valueSpec: dateTimeSpec
    }
  }
});

export const Datetimerfc1123Wrapper: CompositeTypeSpec = compositeSpec({
  typeName: "Datetimerfc1123Wrapper",
  propertySpecs: {
    field: {
      valueSpec: dateTimeRfc1123Spec
    },
    now: {
      valueSpec: dateTimeRfc1123Spec
    }
  }
});

export const DurationWrapper: CompositeTypeSpec = compositeSpec({
  typeName: "DurationWrapper",
  propertySpecs: {
    field: {
      valueSpec: timeSpanSpec
    }
  }
});

export const ByteWrapper: CompositeTypeSpec = compositeSpec({
  typeName: "ByteWrapper",
  propertySpecs: {
    field: {
      valueSpec: byteArraySpec
    }
  }
});

export const ArrayWrapper: CompositeTypeSpec = compositeSpec({
  typeName: "ArrayWrapper",
  propertySpecs: {
    arrayProperty: {
      serializedName: "array",
      valueSpec: sequenceSpec(stringSpec)
    }
  }
});

export const DictionaryWrapper: CompositeTypeSpec = compositeSpec({
  typeName: "DictionaryWrapper",
  propertySpecs: {
    defaultProgram: {
      valueSpec: dictionarySpec(stringSpec)
    }
  }
});

export const ReadonlyObj: CompositeTypeSpec = compositeSpec({
  typeName: "ReadonlyObj",
  propertySpecs: {
    id: {
      valueSpec: stringSpec
    },
    size: {
      valueSpec: numberSpec
    }
  }
});

/**
 * Optional Parameters.
 */
export const AzureCompositeModelCreateOptionalParams: CompositeTypeSpec = compositeSpec({
  typeName: "AzureCompositeModelCreateOptionalParams",
  propertySpecs: {
    /**
     * Dictionary of Array of product
     */
    productDictionaryOfArray: {
      valueSpec: dictionarySpec(sequenceSpec(Product))
    }
  }
});

/**
 * Optional Parameters.
 */
export const AzureCompositeModelUpdateOptionalParams: CompositeTypeSpec = compositeSpec({
  typeName: "AzureCompositeModelUpdateOptionalParams",
  propertySpecs: {
    /**
     * Array of dictionary of products
     */
    productArrayOfDictionary: {
      valueSpec: sequenceSpec(dictionarySpec(Product))
    }
  }
});

/**
 * Optional Parameters.
 */
export const PrimitivePutDurationOptionalParams: CompositeTypeSpec = compositeSpec({
  typeName: "PrimitivePutDurationOptionalParams",
  propertySpecs: {
    field: {
      valueSpec: timeSpanSpec
    }
  }
});

/**
 * Optional Parameters.
 */
export const PrimitivePutByteOptionalParams: CompositeTypeSpec = compositeSpec({
  typeName: "PrimitivePutByteOptionalParams",
  propertySpecs: {
    field: {
      valueSpec: byteArraySpec
    }
  }
});

/**
 * Optional Parameters.
 */
export const ArrayModelPutValidOptionalParams: CompositeTypeSpec = compositeSpec({
  typeName: "ArrayModelPutValidOptionalParams",
  propertySpecs: {
    arrayProperty: {
      serializedName: "array",
      valueSpec: sequenceSpec(stringSpec)
    }
  }
});

/**
 * Optional Parameters.
 */
export const ArrayModelPutEmptyOptionalParams: CompositeTypeSpec = compositeSpec({
  typeName: "ArrayModelPutEmptyOptionalParams",
  propertySpecs: {
    arrayProperty: {
      serializedName: "array",
      valueSpec: sequenceSpec(stringSpec)
    }
  }
});

/**
 * Optional Parameters.
 */
export const DictionaryPutValidOptionalParams: CompositeTypeSpec = compositeSpec({
  typeName: "DictionaryPutValidOptionalParams",
  propertySpecs: {
    defaultProgram: {
      valueSpec: dictionarySpec(stringSpec)
    }
  }
});

/**
 * Optional Parameters.
 */
export const DictionaryPutEmptyOptionalParams: CompositeTypeSpec = compositeSpec({
  typeName: "DictionaryPutEmptyOptionalParams",
  propertySpecs: {
    defaultProgram: {
      valueSpec: dictionarySpec(stringSpec)
    }
  }
});

/**
 * Optional Parameters.
 */
export const ReadonlypropertyPutValidOptionalParams: CompositeTypeSpec = compositeSpec({
  typeName: "ReadonlypropertyPutValidOptionalParams",
  propertySpecs: {
    size: {
      valueSpec: numberSpec
    }
  }
});
