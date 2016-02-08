//Controller for Materials
angular.module('mainApp')
	.controller('materialCtrl', function($scope, $routeParams) {
		$scope.Math=Math;
		$scope.materialID = getMaterialIdByName($routeParams.id);
		$scope.material = jsonMaterials[$scope.materialID];
		if($scope.material.hasOwnProperty("materialID"))
			{ //if crafted
			$scope.craftedBy = getMaterialById($scope.material.materialID, $scope.material.materialAmount)
			}
		else
			{ //if dropped
			$scope.droppedBy = getMonsterByMaterialId($scope.materialID);
			}
		$scope.craft=usedToCraftFromMaterial($scope.materialID);
	})