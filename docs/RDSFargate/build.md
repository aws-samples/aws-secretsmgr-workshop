# RDS and Fargate Round - Build Phase

## Environment setup

!!! info  "To get started at an *AWS event* where the *Event Engine* is being used" 

    _The CloudFormation Stack for this event should already be deployed._

	1. Click <a href="https://dashboard.eventengine.run" target="_blank">here</a> to open the Event Engine dashboard in a separate browser tab.
	2. Enter the **team hash** code that you were provided and click **Proceed**.. 
	3. Click **AWS Console**.
	4. Click **Open Console**.
	5. Make sure you are in the correct region.
	6. Click **[here](../RDS/)** to proceed to the RDS Phase.

---

??? info  "Click here if you're *not using AWS Event Engine* or are using your own account" 

    To setup the workshop environment, make sure you are logged in as an admin user and launch the CloudFormation stack below in the preferred AWS region using the "Deploy to AWS" links below. This will automatically take you to the console to run the template. In order to complete these workshops, you'll need a valid, usable <a href="https://aws.amazon.com/getting-started/" target="_blank">AWS Account</a>. Use a personal account or create a new AWS account to ensure you have the necessary access and that you do not accidentally modify corporate resources. Do **not** use a production AWS account from the company you work for. __We stronly recommend that you use a non-production AWS account for this workshop such as a training, sandbox or personal account. If multiple participants are sharing a single account you should use unique names for the stack set and resources created in the console.__

    ---

    **US East 1 (N. Virginia)** &nbsp; &nbsp; &nbsp; &nbsp;
    <a href="https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=smdemo&templateURL=https://s3.amazonaws.com/sa-security-specialist-workshops-us-east-1/secrets-manager-workshop/RDSFargate.yml" target="_blank">![Deploy in us-east-1](images/deploy-to-aws.png)</a>

    ---

    **US East 2 (Ohio)** &nbsp; &nbsp; &nbsp; &nbsp;
    <a href="https://console.aws.amazon.com/cloudformation/home?region=us-east-2#/stacks/new?stackName=smdemo&templateURL=https://s3.amazonaws.com/sa-security-specialist-workshops-us-east-1/secrets-manager-workshop/RDSFargate.yml" target="_blank">![Deploy in us-east-2](images/deploy-to-aws.png)</a>

    ---

    **US West 1 (N. California)** &nbsp; &nbsp; &nbsp; &nbsp;
    <a href="https://console.aws.amazon.com/cloudformation/home?region=us-west-1#/stacks/new?stackName=smdemo&templateURL=https://s3.amazonaws.com/sa-security-specialist-workshops-us-east-1/secrets-manager-workshop/RDSFargate.yml" target="_blank">![Deploy in us-west-1](images/deploy-to-aws.png)</a>

    ---

    **US West 2 (Oregon)** &nbsp; &nbsp; &nbsp; &nbsp;
    <a href="https://console.aws.amazon.com/cloudformation/home?region=us-west-2#/stacks/new?stackName=smdemo&templateURL=https://s3.amazonaws.com/sa-security-specialist-workshops-us-east-1/secrets-manager-workshop/RDSFargate.yml" target="_blank">![Deploy in us-west-2](images/deploy-to-aws.png)</a>

    ---

    **EU West 1 (Ireland)** &nbsp; &nbsp; &nbsp; &nbsp;
    <a href="https://console.aws.amazon.com/cloudformation/home?region=eu-west-1#/stacks/new?stackName=smdemo&templateURL=https://s3.amazonaws.com/sa-security-specialist-workshops-us-east-1/secrets-manager-workshop/RDSFargate.yml" target="_blank">![Deploy in eu-west-1](images/deploy-to-aws.png)</a>

    ---

    **EU West 2 (London)** &nbsp; &nbsp; &nbsp; &nbsp;
    <a href="https://console.aws.amazon.com/cloudformation/home?region=eu-west-2#/stacks/new?stackName=smdemo&templateURL=https://s3.amazonaws.com/sa-security-specialist-workshops-us-east-1/secrets-manager-workshop/RDSFargate.yml" target="_blank">![Deploy in eu-west-2](images/deploy-to-aws.png)</a>

    ---

    **AP South 1 (Mumbai)** &nbsp; &nbsp; &nbsp; &nbsp;
    <a href="https://console.aws.amazon.com/cloudformation/home?region=ap-south-1#/stacks/new?stackName=smdemo&templateURL=https://s3.amazonaws.com/sa-security-specialist-workshops-us-east-1/secrets-manager-workshop/RDSFargate.yml" target="_blank">![Deploy in ap-south-1](images/deploy-to-aws.png)</a>

    ---

    **AP SouthEast 2 (Sydney)** &nbsp; &nbsp; &nbsp; &nbsp;
    <a href="https://console.aws.amazon.com/cloudformation/home?region=ap-southeast-2#/stacks/new?stackName=smdemo&templateURL=https://s3.amazonaws.com/sa-security-specialist-workshops-us-east-1/secrets-manager-workshop/RDSFargate.yml" target="_blank">![Deploy in ap-southeast-2](images/deploy-to-aws.png)</a>

    ---

    1. Click ***Next*** on the Specify Template section.

    2. On the Specify stack details step, update the following parameters depending on how you are doing this workshop:


          | Field name | Field value |
          | ---------- | ----------- |
          | Stack name | You can choose or just use **smdemo** |
          | Enter the name of the database | Accept the default value of **smdemo** |
          | Enter the TCP port for the database endpoint | Accept the default value of **3306** |
          | Enter a prefix for the Name tag | Accept the default value of **smdemo** |
          | Enter the value for the Project tag | Accept the default value of **smproj** |
          | Enter the SSM AMI Id Parameter | Accept the default value - Do not change! |

    3. Click ***Next*** 

    4. Click Next on the ***Configure stack options*** section.

    5. Finally, acknowledge that the template will create IAM roles under Capabilities and click **Create**.

    This will bring you back to the CloudFormation console. You can refresh the page to see the stack starting to create. Before moving on, make sure the stack is in a __CREATE_COMPLETE__ status. This should take ~8 minutes.

---

You can now proceed to the [RDS Phase](../RDS/).
