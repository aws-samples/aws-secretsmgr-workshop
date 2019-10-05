# RDS and Fargate Round - Scenario

The Secrets Manager Workshop guides you through the use of AWS Secrets Manager.  You will first use Secrets Manager with the Amazon Relational Database Service (RDS).  You will then learn how to use Secrets Manager with AWS Fargate.

* **Level**: 300
* **Duration**: one hour
* **CSF Functions**: Protect
* **CAF Components**: Preventive
* **Prerequisites**: AWS Account, IAM User (with admin permissions)

!!! info "Before you Begin"
    __Please review the architecture diagram below.__

## Workshop Architecture

![Workshop Architecture](images/RDSFargateArch.png)

This environment consists of a VPC in the us-east-1 region with two subnets.  The subnets containts an Amazon EC2 bastion host running Amazon Linux 2 used for running AWS CLI commands and a private, not publicly-accessible, Amazon RDS MySQL database instance.  The subnets are chosen based on the presence of a VPC endpoint for AWS Secrets Manager.  The VPC also contains an AWS Fargate container running the Amazon Linux 2 operating system.  In the RDS and Fargate phases of the workshop, you will learn how to use AWS Secrets Manager to access the RDS database from both a standard EC2 instance and the Fargate container.
