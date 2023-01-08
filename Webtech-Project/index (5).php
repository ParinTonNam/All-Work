<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <title>lab8.3</title>

    <style>
        body {
            background-image: linear-gradient(to bottom, #B1B2FF,#AAC4FF,#D2DAFF,#EEF1FF);
        }
        .content {
            overflow: hidden;
            text-overflow: ellipsis;
            line-clamp: 4;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
        }
    </style>
</head>

<body>
    <?php
    $url = "https://www.themealdb.com/api/json/v1/1/random.php";
    $response = file_get_contents($url);
    $result = json_decode($response);
    $menu = $result->meals[0];
    ?>
    <div class="container d-flex justify-content-center align-items-center" style="height: 100vh;">
        <div class="card p-5" style="max-width: 500px; width: 100%">
            <img src="<?php echo $menu->strMealThumb ?>" alt="">
            <h4 class="m-0 p-3 text-center text-info">
                <?php echo $menu->strMeal ?>
            </h4>
            <hr class="p-0 m-0">
            <div class="content my-3">
                <?php
                echo $menu->strInstructions;
                ?>
            </div>
            <div class="text-center">
                <a class="btn btn-light text-black" href="index.php"><i class="bi bi-arrow-clockwise"></i></a>
                <a class="btn btn-info text-white" href="<?php echo $menu->strSource ?>" target="_blank">Learn more</a>
            </div>
        </div>
    </div>
</body>

</html>