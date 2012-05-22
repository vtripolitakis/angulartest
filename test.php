<?php

$a=array();

array_push($a,array("id"=>"1","firstName"=>"Steve","lastName"=>"Jobs", "img"=>"http://edudemic.com/wp-content/uploads/2011/10/steve-jobs-apple.jpg"));
array_push($a,array("id"=>"2","firstName"=>"Bill","lastName"=>"Gates", "img"=>"http://www.freeinfosociety.com/media/images/1019.jpg"));
array_push($a,array("id"=>"3","firstName"=>"Larry","lastName"=>"Ellison", "img"=>"http://blu.stb.s-msn.com/i/6A/682FE093A991BAE61BED242B28A022.jpg"));

header('Content-type: application/json');
if (isset($_GET['personId']))
{
	echo json_encode($a[$_GET['personId']-1]);
}
else
{
	echo (json_encode($a));
}

?>
