export interface NotificationDto{
    to:string; // email address of the recipient
    subject:string; // subject of the email
    templateId:string; // Id of the template to use
    params:Record<string, any>; // parameters to pass to the template
}