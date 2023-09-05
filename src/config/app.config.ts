interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Vehicle Owner', 'Performance Analyst', 'Reservation Manager'],
  tenantName: 'Organization',
  applicationName: 'Car Rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user profiles',
    'Manage vehicle information',
    'View all user and vehicle data',
    'Manage user roles',
  ],
};
