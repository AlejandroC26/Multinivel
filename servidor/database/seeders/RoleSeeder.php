<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;


class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role1 = Role::create(['name'=>'Admin']);
        $role2 = Role::create(['name'=>'Editor']);

        Permission::create(['name'=>'role.manage'])->syncRoles([$role1]);

        Permission::create(['name'=>'users.show'])->syncRoles([$role1]);
        Permission::create(['name'=>'users.edit'])->syncRoles([$role1]);
        Permission::create(['name'=>'users.edit_sponsor'])->syncRoles([$role1]);

        Permission::create(['name'=>'salepoint.show'])->syncRoles([$role1]);
        Permission::create(['name'=>'salepoint.create'])->syncRoles([$role1]);
        Permission::create(['name'=>'salepoint.edit'])->syncRoles([$role1]);
        Permission::create(['name'=>'salepoint.asignuser'])->syncRoles([$role1]);
        Permission::create(['name'=>'salepoint.removeuser'])->syncRoles([$role1]);

        Permission::create(['name'=>'salepoint.payment'])->syncRoles([$role1]);
        Permission::create(['name'=>'salepoint.create.payment'])->syncRoles([$role1]);
        Permission::create(['name'=>'salepoint.delete.payment'])->syncRoles([$role1]);

        Permission::create(['name'=>'sale.show'])->syncRoles([$role1]);
        Permission::create(['name'=>'sale.create'])->syncRoles([$role1]);
        Permission::create(['name'=>'sale.delete'])->syncRoles([$role1]);
        
        Permission::create(['name'=>'commission.show'])->syncRoles([$role1]);
        Permission::create(['name'=>'commission.create'])->syncRoles([$role1]);
        Permission::create(['name'=>'commission.create_many'])->syncRoles([$role1]);
        Permission::create(['name'=>'commission.payment'])->syncRoles([$role1]);

        Permission::create(['name'=>'payment.show'])->syncRoles([$role1]);
        
    }
}
