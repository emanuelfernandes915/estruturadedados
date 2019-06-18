class BinaryTree{
    // inicializa a raiz como nula
    constructor(){
        this.root = null;
    }

    /* insere o elemento da arvore - o bloco analisa se a raiz é nula, se for
     o número digitado será a raiz, se não, o bloco analisa se o número digitado
     é maior ou menor que a raiz, se for menor, o número será acrescentado à esquerda,
     e se for maior, será acrescentado à direita.
    */
    insert(element){
        this.root = this.insertNode(this.root, element);
    }

    insertNode(rootNode, value){
        if (rootNode==null) {
            return new Node(value);
        }
        if(value>rootNode.content){
            rootNode.right = this.insertNode(rootNode.right, value);
        }else{
            rootNode.left = this.insertNode(rootNode.left, value);
        }
        return rootNode;
    }

    /* Retorna True se o Valor já Existe na Árvore - o bloco procura procura o número informado
     pelo usuário, se o número digitado for igual a raiz, aparecerá uma mensagem de alerta (vedadeiro)
     se for menor que a raiz, o bloco irá procurar na esquerda, se for MAIOR, o bloco irá procurar
     na direita; se não encontrar o número digitado, aparecerá uma mensagem de alerta (falso)
    */
     search(value) {
        return this.searchNode(this.root, value);
    }
    searchNode(rootNode, value){
        if (rootNode == null) return false;
        if (rootNode.content == value) return true;
        if (value > rootNode.content)
            return this.searchNode(rootNode.right, value);
        else
            return this.searchNode(rootNode.left, value);
    }


    /* executa a função callback para cada nó, em ordem
       em que os números menores ficarão à esquerda da raiz, e os números maiores ficarão
       à direita da raiz
    */
    inOrderTraverse(callback){
        this.inOrder(this.root, callback);
    }

    inOrder(rootNode, callback){
        if(rootNode==null) return;
        this.inOrder(rootNode.left, callback);
        callback(rootNode.content);
        this.inOrder(rootNode.right, callback);
    }

    /*  executa a função callback para cada nó, em pré-ordem
        em que a raiz é mostrada primeiro, depois é mostrado a raiz que fica à esquerda e sua folha,
        em seguida é mostrada a raiz que fica à direita e sua folha
    */
    preOrderTraverse(callback){
        this.preOrder(this.root, callback);
    }

    preOrder(rootNode, callback){
        if(rootNode==null) return;
        callback(rootNode.content);
        this.preOrder(rootNode.left, callback);
        this.preOrder(rootNode.right, callback);
    }

    /*  executa a função callback para cada nó, em pós-ordem
        é mostrada primeiro a folha da esquerda e sua raiz,
        depois é mostrado a folha da direita e sua raiz, 
        e por último é mostrado a raiz principal
    */
    postOrderTraverse(callback){
        this.postOrder(this.root, callback);
    }

    postOrder(rootNode, callback){
        if(rootNode==null) return;
        this.postOrder(rootNode.left, callback);
        this.postOrder(rootNode.right, callback);
        callback(rootNode.content);
    }

    /*  Remove um Elemento Existente na Árvore e Retorna - O bloco solicita o número a ser removido, 
        verifica se a árvore é nula. Se for, acusa que o número não existe; se não for nula, 
        verifica se o número é igual a raiz. Se for, o número é apagado, se não for, 
        verfica se é menor ou maior que a raiz. Se for menor, procura o número na esquerda e remove, 
        se for maior procura na direita e o remove, e se não encontrar é acusado que o número não existe.
    */
    remove(value){
        this.root = this.removeNode(this.root, value);
    }

    removeNode(rootNode, value){
        if(rootNode==null) return null;
        if(value==rootNode.content){
            if(rootNode.left === null && rootNode.right === null){
                rootNode = null;
            }else if(rootNode.right == null){
                rootNode = rootNode.left;
            }else if(rootNode.left == null){
                rootNode = rootNode.right;
            }else{
                let i = rootNode.right;
                while(i.left!=null){
                    i = i.left;
                }
                i.left = rootNode.left;
                rootNode = rootNode.right;
            }
        }else if(value>rootNode.content){
            rootNode.right = this.removeNode(rootNode.right, value);
        }else{
            rootNode.left = this.removeNode(rootNode.left, value);
        }
        return rootNode;
    }

    /* Exibe a Altura da Árvore
        Exeptuando-se a raiz, a altura será determinada pela quantidade de números existentes, 
        tanto na direita, quanto na esquerda, dispostos em camadas.
    */
    heigth(){
		return this.heigthNode(this.root);
    }

	 heigthNode(node){
        if(node==null)
            return -1;
        let leftHeigth = this.heigthNode(node.left),
            rightHeigth = this.heigthNode(node.right);
        if(leftHeigth > rightHeigth){
            return 1 + leftHeigth;
        }else{
            return 1 + rightHeigth;
		} 
	}

    /* 
    Ele calcula o tamanho da árvore através da soma de todos os nós.
    */
    size(){
		return this.sumNodes(this.root);
    }

	sumNodes(node){
        if(node==null) 
            return 0;
        return 1 + this.sumNodes(node.left)+this.sumNodes(node.right);
    }

    //exibe o menor valor da arvore
    min(){
		let node = this.root;
        if (node == null) return null;
        while (node.left != null)
            node = node.left;
        return node.content;
	}

    //exibe o maior valor da arvore
    max(){
		let node = this.root;
        if (node == null) return null;
		while (node.right != null)
			node = node.right;
        return node.content;
	}
}