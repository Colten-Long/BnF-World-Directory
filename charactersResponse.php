<?php
	$communityUrl = 'http://www.bnfworld.com/';
	$apiKey = 'a3939c43e918a9fe323df50e477180d0';
		
	$curl = curl_init( $communityUrl . 'api/cms/records/bnf_characters' );
	curl_setopt_array( $curl, array(
		CURLOPT_RETURNTRANSFER	=> TRUE,
		CURLOPT_HTTPAUTH	=> CURLAUTH_BASIC,
		CURLOPT_USERPWD		=> "{$apiKey}:"
	) );
	$response = curl_exec( $curl );
	
	echo $response;
?>
