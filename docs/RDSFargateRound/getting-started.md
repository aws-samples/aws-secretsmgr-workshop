# RDS and Fargate Round - Getting Started

## Accessing AWS Event Engine

!!! info  "To get started at an *AWS event* where the *Event Engine* is being used" 

    _The CloudFormation Stack for this event should already be deployed._

	1. Click <a href="https://dashboard.eventengine.run" target="_blank">here</a> to open the Event Engine dashboard in a separate browser tab.
	2. Enter the **team hash** code that you were provided and click **Proceed**.. 
	3. Click **AWS Console**.
	4. Click **Open Console**.
	5. Make sure you are in the correct region.
	6. Click **[here](RDS.md)** to proceed to the RDS Phase of the workshop.

---

??? info  "Click here if you're *not at an AWS event* or are using your own account" 

    In order to complete these workshops, you'll need a valid, usable <a href="https://aws.amazon.com/getting-started/" target="_blank">AWS Account</a>. Use a personal account or create a new AWS account to ensure you have the necessary access and that you do not accidentally modify corporate resources. Do **not** use an AWS account from the company you work for. __We stronly recommend that you use a non-production AWS account for this workshop such as a training, sandbox or personal account. If multiple participants are sharing a single account you should use unique names for the stack set and resources created in the console.__

	**Create an admin user**

	If you don't already have an AWS IAM user with admin permissions, please use the following instructions to create one:

	1.  Browse to the <a href="https://console.aws.amazon.com/iam/" target="_blank">AWS IAM</a> console.
	2.  Click **Users** on the left navigation and then click **Add User**.
	3.  Enter a **User Name**, check the checkbox for **AWS Management Console access**, enter a **Custom Password**, and click **Next:Permissions**.
	4.  Click **Attach existing policies directly**, click the checkbox next to the **AdministratorAccess**, and click **Next:review**.
	5.  Click **Create User**
	6.  Click **Dashboard** on the left navigation and use the **IAM users sign-in link** to login as the admin user you just created.

	**Add credits (optional**)

	If you are doing this workshop as part of an AWS sponsored event, you will receive credits to cover the costs.  Below are the instructions for entering the credits:

	1.  Browse to the <a href="https://console.aws.amazon.com/billing/home?#/credits" target="_blank">AWS Account Settings</a> console.
	2.  Enter the **Promo Code** you received (these will be handed out at the beginning of the workshop).
	3.  Enter the **Security Check** and click **Redeem**.


You are now setup for the workshop!
