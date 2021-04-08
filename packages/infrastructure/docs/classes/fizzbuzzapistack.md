[@stormreply/fizz-buzz-api-infrastructure](../README.md) / FizzBuzzApiStack

# Class: FizzBuzzApiStack

## Hierarchy

* *Stack*

  ↳ **FizzBuzzApiStack**

## Table of contents

### Constructors

- [constructor](fizzbuzzapistack.md#constructor)

### Properties

- [\_versionReportingEnabled](fizzbuzzapistack.md#_versionreportingenabled)
- [account](fizzbuzzapistack.md#account)
- [artifactId](fizzbuzzapistack.md#artifactid)
- [environment](fizzbuzzapistack.md#environment)
- [nestedStackResource](fizzbuzzapistack.md#nestedstackresource)
- [node](fizzbuzzapistack.md#node)
- [region](fizzbuzzapistack.md#region)
- [synthesizer](fizzbuzzapistack.md#synthesizer)
- [tags](fizzbuzzapistack.md#tags)
- [templateFile](fizzbuzzapistack.md#templatefile)
- [templateOptions](fizzbuzzapistack.md#templateoptions)
- [terminationProtection](fizzbuzzapistack.md#terminationprotection)

### Accessors

- [availabilityZones](fizzbuzzapistack.md#availabilityzones)
- [dependencies](fizzbuzzapistack.md#dependencies)
- [maxResources](fizzbuzzapistack.md#maxresources)
- [nested](fizzbuzzapistack.md#nested)
- [nestedStackParent](fizzbuzzapistack.md#nestedstackparent)
- [notificationArns](fizzbuzzapistack.md#notificationarns)
- [parentStack](fizzbuzzapistack.md#parentstack)
- [partition](fizzbuzzapistack.md#partition)
- [stackId](fizzbuzzapistack.md#stackid)
- [stackName](fizzbuzzapistack.md#stackname)
- [urlSuffix](fizzbuzzapistack.md#urlsuffix)

### Methods

- [\_addAssemblyDependency](fizzbuzzapistack.md#_addassemblydependency)
- [\_synthesizeTemplate](fizzbuzzapistack.md#_synthesizetemplate)
- [\_toCloudFormation](fizzbuzzapistack.md#_tocloudformation)
- [\_validateId](fizzbuzzapistack.md#_validateid)
- [addDependency](fizzbuzzapistack.md#adddependency)
- [addDockerImageAsset](fizzbuzzapistack.md#adddockerimageasset)
- [addFileAsset](fizzbuzzapistack.md#addfileasset)
- [addTransform](fizzbuzzapistack.md#addtransform)
- [allocateLogicalId](fizzbuzzapistack.md#allocatelogicalid)
- [exportValue](fizzbuzzapistack.md#exportvalue)
- [formatArn](fizzbuzzapistack.md#formatarn)
- [getLogicalId](fizzbuzzapistack.md#getlogicalid)
- [onPrepare](fizzbuzzapistack.md#onprepare)
- [onSynthesize](fizzbuzzapistack.md#onsynthesize)
- [onValidate](fizzbuzzapistack.md#onvalidate)
- [parseArn](fizzbuzzapistack.md#parsearn)
- [prepare](fizzbuzzapistack.md#prepare)
- [prepareCrossReference](fizzbuzzapistack.md#preparecrossreference)
- [renameLogicalId](fizzbuzzapistack.md#renamelogicalid)
- [reportMissingContext](fizzbuzzapistack.md#reportmissingcontext)
- [reportMissingContextKey](fizzbuzzapistack.md#reportmissingcontextkey)
- [resolve](fizzbuzzapistack.md#resolve)
- [synthesize](fizzbuzzapistack.md#synthesize)
- [toJsonString](fizzbuzzapistack.md#tojsonstring)
- [toString](fizzbuzzapistack.md#tostring)
- [validate](fizzbuzzapistack.md#validate)
- [isConstruct](fizzbuzzapistack.md#isconstruct)
- [isStack](fizzbuzzapistack.md#isstack)
- [of](fizzbuzzapistack.md#of)

## Constructors

### constructor

\+ **new FizzBuzzApiStack**(`scope`: *Construct*, `id`: *string*, `props?`: StackProps): [*FizzBuzzApiStack*](fizzbuzzapistack.md)

#### Parameters:

Name | Type |
:------ | :------ |
`scope` | *Construct* |
`id` | *string* |
`props?` | StackProps |

**Returns:** [*FizzBuzzApiStack*](fizzbuzzapistack.md)

Overrides: Stack.constructor

Defined in: [lib/index.ts:7](https://github.com/stormreply/fizz-buzz-api/blob/030d9a2/packages/infrastructure/lib/index.ts#L7)

## Properties

### \_versionReportingEnabled

• `Readonly` **\_versionReportingEnabled**: *boolean*

Whether version reporting is enabled for this stack

Controls whether the CDK Metadata resource is injected

**`internal`** 

Inherited from: Stack._versionReportingEnabled

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:269

___

### account

• `Readonly` **account**: *string*

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
    either be a concerete account (e.g. `585695031111`) or the
    `Aws.accountId` token.
3. `Aws.accountId`, which represents the CloudFormation intrinsic reference
    `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concerete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

**`stability`** stable

Inherited from: Stack.account

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:208

___

### artifactId

• `Readonly` **artifactId**: *string*

The ID of the cloud assembly artifact for this stack.

**`stability`** stable

Inherited from: Stack.artifactId

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:255

___

### environment

• `Readonly` **environment**: *string*

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.account` or `Aws.region`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

**`stability`** stable

Inherited from: Stack.environment

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:226

___

### nestedStackResource

• `Optional` `Readonly` **nestedStackResource**: *CfnResource*

(experimental) If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

**`experimental`** 

Inherited from: Stack.nestedStackResource

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:240

___

### node

• `Readonly` **node**: *ConstructNode*

The construct tree node associated with this construct.

**`stability`** stable

Inherited from: Stack.node

Defined in: node_modules/@aws-cdk/core/lib/construct-compat.d.ts:70

___

### region

• `Readonly` **region**: *string*

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
    either be a concerete region (e.g. `us-west-2`) or the `Aws.region`
    token.
3. `Aws.region`, which is represents the CloudFormation intrinsic reference
    `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concerete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

**`stability`** stable

Inherited from: Stack.region

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:185

___

### synthesizer

• `Readonly` **synthesizer**: IStackSynthesizer

(experimental) Synthesis method for this stack.

**`experimental`** 

Inherited from: Stack.synthesizer

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:261

___

### tags

• `Readonly` **tags**: *TagManager*

Tags to be applied to the stack.

**`stability`** stable

Inherited from: Stack.tags

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:156

___

### templateFile

• `Readonly` **templateFile**: *string*

The name of the CloudFormation template file emitted to the output directory during synthesis.

**`stability`** stable

**`example`** 

'MyStack.template.json'

Inherited from: Stack.templateFile

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:249

___

### templateOptions

• `Readonly` **templateOptions**: ITemplateOptions

Options for CloudFormation template (like version, transform, description).

**`stability`** stable

Inherited from: Stack.templateOptions

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:162

___

### terminationProtection

• `Optional` `Readonly` **terminationProtection**: *boolean*

Whether termination protection is enabled for this stack.

**`stability`** stable

Inherited from: Stack.terminationProtection

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:232

## Accessors

### availabilityZones

• get **availabilityZones**(): *string*[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

**`stability`** stable

**Returns:** *string*[]

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:480

___

### dependencies

• get **dependencies**(): *Stack*[]

Return the stacks this stack depends on.

**`stability`** stable

**Returns:** *Stack*[]

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:360

___

### maxResources

• `Private`get **maxResources**(): *any*

Maximum number of resources in the stack

Set to 0 to mean "unlimited".

**Returns:** *any*

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:662

___

### nested

• get **nested**(): *boolean*

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

**`stability`** stable

**Returns:** *boolean*

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:409

___

### nestedStackParent

• get **nestedStackParent**(): *undefined* \| *Stack*

If this is a nested stack, returns it's parent stack.

**`stability`** stable

**Returns:** *undefined* \| *Stack*

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:500

___

### notificationArns

• get **notificationArns**(): *string*[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

**`stability`** stable

**Returns:** *string*[]

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:403

___

### parentStack

• get **parentStack**(): *undefined* \| *Stack*

(deprecated) Returns the parent of a nested stack.

**`deprecated`** use `nestedStackParent`

**Returns:** *undefined* \| *Stack*

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:506

___

### partition

• get **partition**(): *string*

The partition in which this stack is defined.

**`stability`** stable

**Returns:** *string*

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:381

___

### stackId

• get **stackId**(): *string*

The ID of the stack.

**`stability`** stable

**`example`** 

// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'

**Returns:** *string*

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:397

___

### stackName

• get **stackName**(): *string*

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.stackName` directly.

**`stability`** stable

**Returns:** *string*

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:375

___

### urlSuffix

• get **urlSuffix**(): *string*

The Amazon domain suffix for the region in which this stack is defined.

**`stability`** stable

**Returns:** *string*

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:387

## Methods

### \_addAssemblyDependency

▸ **_addAssemblyDependency**(`target`: *Stack*, `reason?`: *string*): *void*

Called implicitly by the `addDependency` helper function in order to
realize a dependency between two top-level stacks at the assembly level.

Use `stack.addDependency` to define the dependency between any two stacks,
and take into account nested stack relationships.

**`internal`** 

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *Stack* |
`reason?` | *string* |

**Returns:** *void*

Inherited from: Stack._addAssemblyDependency

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:529

___

### \_synthesizeTemplate

▸ **_synthesizeTemplate**(`session`: ISynthesisSession): *void*

Synthesizes the cloudformation template into a cloud assembly.

**`internal`** 

#### Parameters:

Name | Type |
:------ | :------ |
`session` | ISynthesisSession |

**Returns:** *void*

Inherited from: Stack._synthesizeTemplate

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:534

___

### \_toCloudFormation

▸ `Protected`**_toCloudFormation**(): *any*

Returns the CloudFormation template for this stack by traversing
the tree and invoking _toCloudFormation() on all Entity objects.

**`internal`** 

**Returns:** *any*

Inherited from: Stack._toCloudFormation

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:643

___

### \_validateId

▸ `Protected`**_validateId**(`name`: *string*): *void*

Validate stack name

CloudFormation stack names can include dashes in addition to the regular identifier
character classes, and we don't allow one of the magic markers.

**`internal`** 

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** *void*

Inherited from: Stack._validateId

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:636

___

### addDependency

▸ **addDependency**(`target`: *Stack*, `reason?`: *string*): *void*

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

**`stability`** stable

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *Stack* |
`reason?` | *string* |

**Returns:** *void*

Inherited from: Stack.addDependency

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:354

___

### addDockerImageAsset

▸ **addDockerImageAsset**(`asset`: DockerImageAssetSource): DockerImageAssetLocation

(deprecated) Register a docker image asset on this Stack.

**`deprecated`** Use `stack.synthesizer.addDockerImageAsset()` if you are calling,
and a different `IStackSynthesizer` class if you are implementing.

#### Parameters:

Name | Type |
:------ | :------ |
`asset` | DockerImageAssetSource |

**Returns:** DockerImageAssetLocation

Inherited from: Stack.addDockerImageAsset

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:494

___

### addFileAsset

▸ **addFileAsset**(`asset`: FileAssetSource): FileAssetLocation

(deprecated) Register a file asset on this Stack.

**`deprecated`** Use `stack.synthesizer.addFileAsset()` if you are calling,
and a different IStackSynthesizer class if you are implementing.

#### Parameters:

Name | Type |
:------ | :------ |
`asset` | FileAssetSource |

**Returns:** FileAssetLocation

Inherited from: Stack.addFileAsset

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:487

___

### addTransform

▸ **addTransform**(`transform`: *string*): *void*

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

**`see`** https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html

**`stability`** stable

**`example`** 

stack.addTransform('AWS::Serverless-2016-10-31')

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`transform` | *string* | The transform to add.   |

**Returns:** *void*

Inherited from: Stack.addTransform

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:519

___

### allocateLogicalId

▸ `Protected`**allocateLogicalId**(`cfnElement`: *CfnElement*): *string*

Returns the naming scheme used to allocate logical IDs.

By default, uses
the `HashedAddressingScheme` but this method can be overridden to customize
this behavior.

In order to make sure logical IDs are unique and stable, we hash the resource
construct tree path (i.e. toplevel/secondlevel/.../myresource) and add it as
a suffix to the path components joined without a separator (CloudFormation
IDs only allow alphanumeric characters).

The result will be:

   <path.join('')><md5(path.join('/')>
     "human"      "hash"

If the "human" part of the ID exceeds 240 characters, we simply trim it so
the total ID doesn't exceed CloudFormation's 255 character limit.

We only take 8 characters from the md5 hash (0.000005 chance of collision).

Special cases:

- If the path only contains a single component (i.e. it's a top-level
   resource), we won't add the hash to it. The hash is not needed for
   disamiguation and also, it allows for a more straightforward migration an
   existing CloudFormation template to a CDK stack without logical ID changes
   (or renames).
- For aesthetic reasons, if the last components of the path are the same
   (i.e. `L1/L2/Pipeline/Pipeline`), they will be de-duplicated to make the
   resulting human portion of the ID more pleasing: `L1L2Pipeline<HASH>`
   instead of `L1L2PipelinePipeline<HASH>`
- If a component is named "Default" it will be omitted from the path. This
   allows refactoring higher level abstractions around constructs without affecting
   the IDs of already deployed resources.
- If a component is named "Resource" it will be omitted from the user-visible
   path, but included in the hash. This reduces visual noise in the human readable
   part of the identifier.

**`stability`** stable

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`cfnElement` | *CfnElement* | The element for which the logical ID is allocated.   |

**Returns:** *string*

Inherited from: Stack.allocateLogicalId

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:627

___

### exportValue

▸ **exportValue**(`exportedValue`: *any*, `options?`: ExportValueOptions): *string*

Create a CloudFormation Export for a value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

## Example

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

### Deployment 1: break the relationship

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
   stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
   remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
   will make sure the CloudFormation Export continues to exist while the relationship
   between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

### Deployment 2: remove the bucket resource

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

**`stability`** stable

#### Parameters:

Name | Type |
:------ | :------ |
`exportedValue` | *any* |
`options?` | ExportValueOptions |

**Returns:** *string*

Inherited from: Stack.exportValue

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:583

___

### formatArn

▸ **formatArn**(`components`: ArnComponents): *string*

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

   arn:{partition}:{service}:{region}:{account}:{resource}{sep}}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

**`stability`** stable

#### Parameters:

Name | Type |
:------ | :------ |
`components` | ArnComponents |

**Returns:** *string*

Inherited from: Stack.formatArn

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:429

___

### getLogicalId

▸ **getLogicalId**(`element`: *CfnElement*): *string*

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

**`stability`** stable

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`element` | *CfnElement* | The CloudFormation element for which a logical identity is needed.   |

**Returns:** *string*

Inherited from: Stack.getLogicalId

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:345

___

### onPrepare

▸ `Protected`**onPrepare**(): *void*

Perform final modifications before synthesis.

This method can be implemented by derived constructs in order to perform
final changes before synthesis. prepare() will be called after child
constructs have been prepared.

This is an advanced framework feature. Only use this if you
understand the implications.

**`stability`** stable

**Returns:** *void*

Inherited from: Stack.onPrepare

Defined in: node_modules/@aws-cdk/core/lib/construct-compat.d.ts:97

___

### onSynthesize

▸ `Protected`**onSynthesize**(`session`: ISynthesisSession): *void*

Allows this construct to emit artifacts into the cloud assembly during synthesis.

This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
as they participate in synthesizing the cloud assembly.

**`stability`** stable

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`session` | ISynthesisSession | The synthesis session.   |

**Returns:** *void*

Inherited from: Stack.onSynthesize

Defined in: node_modules/@aws-cdk/core/lib/construct-compat.d.ts:107

___

### onValidate

▸ `Protected`**onValidate**(): *string*[]

Validate the current construct.

This method can be implemented by derived constructs in order to perform
validation logic. It is called on all constructs before synthesis.

**`stability`** stable

**Returns:** *string*[]

An array of validation error messages, or an empty array if the construct is valid.

Inherited from: Stack.onValidate

Defined in: node_modules/@aws-cdk/core/lib/construct-compat.d.ts:84

___

### parseArn

▸ **parseArn**(`arn`: *string*, `sepIfToken?`: *string*, `hasName?`: *boolean*): ArnComponents

Given an ARN, parses it and returns components.

IF THE ARN IS A CONCRETE STRING...

...it will be parsed and validated. The separator (`sep`) will be set to '/'
if the 6th component includes a '/', in which case, `resource` will be set
to the value before the '/' and `resourceName` will be the rest. In case
there is no '/', `resource` will be set to the 6th components and
`resourceName` will be set to the rest of the string.

IF THE ARN IS A TOKEN...

...it cannot be validated, since we don't have the actual value yet at the
time of this function call. You will have to supply `sepIfToken` and
whether or not ARNs of the expected format usually have resource names
in order to parse it properly. The resulting `ArnComponents` object will
contain tokens for the subexpressions of the ARN, not string literals.

If the resource name could possibly contain the separator char, the actual
resource name cannot be properly parsed. This only occurs if the separator
char is '/', and happens for example for S3 object ARNs, IAM Role ARNs,
IAM OIDC Provider ARNs, etc. To properly extract the resource name from a
Tokenized ARN, you must know the resource type and call
`Arn.extractResourceName`.

**`stability`** stable

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`arn` | *string* | The ARN string to parse.   |
`sepIfToken?` | *string* | The separator used to separate resource from resourceName.   |
`hasName?` | *boolean* | Whether there is a name component in the ARN at all.   |

**Returns:** ArnComponents

an ArnComponents object which allows access to the various
components of the ARN.

Inherited from: Stack.parseArn

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:463

___

### prepare

▸ `Protected`**prepare**(): *void*

Perform final modifications before synthesis.

This method can be implemented by derived constructs in order to perform
final changes before synthesis. prepare() will be called after child
constructs have been prepared.

This is an advanced framework feature. Only use this if you
understand the implications.

**`stability`** stable

**Returns:** *void*

Inherited from: Stack.prepare

Defined in: node_modules/@aws-cdk/core/lib/construct-compat.d.ts:130

___

### prepareCrossReference

▸ `Protected`**prepareCrossReference**(`_sourceStack`: *Stack*, `reference`: *Reference*): IResolvable

(deprecated) Deprecated.

**`see`** https://github.com/aws/aws-cdk/pull/7187

**`deprecated`** cross reference handling has been moved to `App.prepare()`.

#### Parameters:

Name | Type |
:------ | :------ |
`_sourceStack` | *Stack* |
`reference` | *Reference* |

**Returns:** IResolvable

reference itself without any change

Inherited from: Stack.prepareCrossReference

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:651

___

### renameLogicalId

▸ **renameLogicalId**(`oldId`: *string*, `newId`: *string*): *void*

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

**`stability`** stable

#### Parameters:

Name | Type |
:------ | :------ |
`oldId` | *string* |
`newId` | *string* |

**Returns:** *void*

Inherited from: Stack.renameLogicalId

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:330

___

### reportMissingContext

▸ **reportMissingContext**(`report`: MissingContext): *void*

(deprecated) DEPRECATED.

**`deprecated`** use `reportMissingContextKey()`

#### Parameters:

Name | Type |
:------ | :------ |
`report` | MissingContext |

**Returns:** *void*

Inherited from: Stack.reportMissingContext

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:311

___

### reportMissingContextKey

▸ **reportMissingContextKey**(`report`: MissingContext): *void*

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

**`stability`** stable

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`report` | MissingContext | The set of parameters needed to obtain the context.   |

**Returns:** *void*

Inherited from: Stack.reportMissingContextKey

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:321

___

### resolve

▸ **resolve**(`obj`: *any*): *any*

Resolve a tokenized value in the context of the current stack.

**`stability`** stable

#### Parameters:

Name | Type |
:------ | :------ |
`obj` | *any* |

**Returns:** *any*

Inherited from: Stack.resolve

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:299

___

### synthesize

▸ `Protected`**synthesize**(`session`: ISynthesisSession): *void*

Allows this construct to emit artifacts into the cloud assembly during synthesis.

This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
as they participate in synthesizing the cloud assembly.

**`stability`** stable

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`session` | ISynthesisSession | The synthesis session.   |

**Returns:** *void*

Inherited from: Stack.synthesize

Defined in: node_modules/@aws-cdk/core/lib/construct-compat.d.ts:140

___

### toJsonString

▸ **toJsonString**(`obj`: *any*, `space?`: *number*): *string*

Convert an object, potentially containing tokens, to a JSON string.

**`stability`** stable

#### Parameters:

Name | Type |
:------ | :------ |
`obj` | *any* |
`space?` | *number* |

**Returns:** *string*

Inherited from: Stack.toJsonString

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:305

___

### toString

▸ **toString**(): *string*

Returns a string representation of this construct.

**`stability`** stable

**Returns:** *string*

Inherited from: Stack.toString

Defined in: node_modules/constructs/lib/construct.d.ts:363

___

### validate

▸ `Protected`**validate**(): *string*[]

Validate the current construct.

This method can be implemented by derived constructs in order to perform
validation logic. It is called on all constructs before synthesis.

**`stability`** stable

**Returns:** *string*[]

An array of validation error messages, or an empty array if the construct is valid.

Inherited from: Stack.validate

Defined in: node_modules/@aws-cdk/core/lib/construct-compat.d.ts:117

___

### isConstruct

▸ `Static`**isConstruct**(`x`: *any*): x is Construct

Return whether the given object is a Construct.

**`stability`** stable

#### Parameters:

Name | Type |
:------ | :------ |
`x` | *any* |

**Returns:** x is Construct

Inherited from: Stack.isConstruct

Defined in: node_modules/@aws-cdk/core/lib/construct-compat.d.ts:64

___

### isStack

▸ `Static`**isStack**(`x`: *any*): x is Stack

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

**`stability`** stable

#### Parameters:

Name | Type |
:------ | :------ |
`x` | *any* |

**Returns:** x is Stack

Inherited from: Stack.isStack

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:141

___

### of

▸ `Static`**of**(`construct`: IConstruct): *Stack*

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

**`stability`** stable

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`construct` | IConstruct | The construct to start the search from.   |

**Returns:** *Stack*

Inherited from: Stack.of

Defined in: node_modules/@aws-cdk/core/lib/stack.d.ts:150
