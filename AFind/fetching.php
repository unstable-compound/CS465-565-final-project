<?php
    $conn = mysqli_connect('localhost','root','','CS565');
    //$db = mysqli_select_db

    if(isset($_POST['search_post_btn']))
    {
        $id = $_POST['id'];
       // $query = "SELECT * from products where id = '$id' ";
        $query = "SELECT APartner.Name, APartner.Contact from APartner, Activity, A_Rel WHERE (APartner.id = A_Rel.id and Activity.A_id = A_Rel.A_id) and Activity.A_id = '$id' ";
        $query_run = mysqli_query($conn,$query);

        if($query_run)
        {
            while($row = mysqli_fetch_array($query_run))
            {
                ?>
                    <tr>
                        <th class="msg">NAME </th>
                        <td><?php echo $row['Name'] ?></td>
                    </tr>
                    <tr>
                        <th class="msg">Contact </th>
                        <td><?php echo $row['Contact'] ?></td>
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                    </tr>
                <?php
                
            }
        }
        else
        {
                echo 'Data not found';
        }
    }
?>